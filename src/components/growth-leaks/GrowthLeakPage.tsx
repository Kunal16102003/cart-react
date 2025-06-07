import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, MessageCircle, Send, CheckCircle2, AlertTriangle, PlayCircle, Search, PenTool as Tool, Shield } from 'lucide-react';
import { growthLeaks } from '../../data/leakData';
import { DifficultyBadge, RoleBadge, TimeframeBadge } from './BadgeComponents';
import SeverityIndicator from './SeverityIndicator';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ThriveStackData {
  title: string;
  finding: {
    videoUrl: string;
    metrics: string[];
    dashboardSetup: string[];
  };
  fixing: {
    videoUrl: string;
    steps: string[];
    automation: {
      code: string;
      explanation: string;
    };
  };
  preventing: {
    videoUrl: string;
    strategy: string[];
    bestPractices: string[];
  };
}

const GrowthLeakPage: React.FC = () => {
  const { pillar, leakId } = useParams();
  const [activeTab, setActiveTab] = useState<'find' | 'fix' | 'prevent'>('find');
  const [implementationData, setImplementationData] = useState<ThriveStackData | null>(null);
  const leak = growthLeaks.find(l => l.id === leakId && l.pillar.toLowerCase() === pillar?.toLowerCase());

  useEffect(() => {
    const fetchImplementationData = async () => {
      try {
        const response = await fetch(`/data/thrivestack-data/${pillar?.toLowerCase()}/${leakId}.json`);
        if (!response.ok) {
          throw new Error('Failed to load implementation data');
        }
        const data = await response.json();
        setImplementationData(data);
      } catch (error) {
        console.error('Error loading implementation data:', error);
        setImplementationData(null);
      }
    };

    if (pillar && leakId) {
      fetchImplementationData();
    }
  }, [pillar, leakId]);

  if (!leak) {
    return (
      <div className="w-[90%] mx-auto py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-2xl font-bold text-red-600">Growth Leak Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Return to Growth Leaks Library
          </Link>
        </div>
      </div>
    );
  }

  const getBenchmarkStatus = (score: number) => {
    if (score >= 8) return { label: 'Ugly', color: 'text-red-600 bg-red-50' };
    if (score >= 5) return { label: 'Average', color: 'text-yellow-600 bg-yellow-50' };
    return { label: 'Good', color: 'text-green-600 bg-green-50' };
  };

  const benchmark = getBenchmarkStatus(leak.impactScore);

  const TabButton: React.FC<{
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    children: React.ReactNode;
  }> = ({ active, onClick, icon, children }) => (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
        active
          ? 'bg-blue-100 text-blue-800'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </button>
  );

  const renderImplementationContent = () => {
    if (!implementationData) {
      return (
        <div className="text-center py-8">
          <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <p className="text-gray-600">Implementation data is loading...</p>
        </div>
      );
    }

    switch (activeTab) {
      case 'find':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Metrics to Monitor</h3>
              <ul className="space-y-2">
                {implementationData.finding.metrics.map((metric, index) => (
                  <li key={index} className="flex items-center text-blue-800">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-blue-500" />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dashboard Setup</h3>
              <ol className="space-y-3">
                {implementationData.finding.dashboardSetup.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Video Tutorial</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Watch our detailed guide on identifying this growth leak.
              </p>
              <a
                href={implementationData.finding.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Watch Tutorial
              </a>
            </div>
          </div>
        );

      case 'fix':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Implementation Steps</h3>
              <ul className="space-y-3">
                {implementationData.fixing.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-200 text-green-700 text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-green-800">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automation Setup</h3>
              <div className="mb-4">
                <p className="text-gray-700 mb-4">{implementationData.fixing.automation.explanation}</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{implementationData.fixing.automation.code}</code>
                </pre>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Implementation Tutorial</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Follow our step-by-step guide to fix this growth leak.
              </p>
              <a
                href={implementationData.fixing.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Watch Tutorial
              </a>
            </div>
          </div>
        );

      case 'prevent':
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Prevention Strategy</h3>
              <ul className="space-y-2">
                {implementationData.preventing.strategy.map((item, index) => (
                  <li key={index} className="flex items-center text-purple-800">
                    <Shield className="w-5 h-5 mr-2 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
              <ul className="space-y-3">
                {implementationData.preventing.bestPractices.map((practice, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-gray-600" />
                    <span className="text-gray-700">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Prevention Tutorial</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Learn how to prevent this growth leak from recurring.
              </p>
              <a
                href={implementationData.preventing.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Watch Tutorial
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-[90%] mx-auto py-12">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Growth Leaks Library
        </Link>

        <div className="space-y-8">
          {/* Header Section */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-4xl">{leak.emoji}</span>
                  Growth Leak: {leak.name}
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  Phase found: {leak.pillar}
                </p>
              </div>
              <SeverityIndicator score={leak.impactScore} />
            </div>
          </div>

          {/* What Is This Leak? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is This Leak?</h2>
            <p className="text-gray-700 leading-relaxed">
              {leak.description}
            </p>
          </section>

          {/* The Metric That Signals It */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Metric That Signals It</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-2xl font-bold text-blue-900">{leak.impactMetric}</div>
            </div>
          </section>

          {/* Who's Responsible? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who's Responsible?</h2>
            <div className="flex gap-2">
              <RoleBadge role={leak.responsibleRole} />
            </div>
          </section>

          {/* Industry Benchmark */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Benchmark</h2>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-800">Good</div>
                <div className="text-sm text-green-600">{'< 5 Impact Score'}</div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="font-semibold text-yellow-800">Average</div>
                <div className="text-sm text-yellow-600">5-7 Impact Score</div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="font-semibold text-red-800">Ugly</div>
                <div className="text-sm text-red-600">{'>= 8 Impact Score'}</div>
              </div>
            </div>
          </section>

          {/* Implementation with ThriveStack */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Implementation with ThriveStack
            </h2>
            
            <div className="flex gap-4 mb-6">
              <TabButton
                active={activeTab === 'find'}
                onClick={() => setActiveTab('find')}
                icon={<Search className="w-4 h-4" />}
              >
                Find
              </TabButton>
              <TabButton
                active={activeTab === 'fix'}
                onClick={() => setActiveTab('fix')}
                icon={<Tool className="w-4 h-4" />}
              >
                Fix
              </TabButton>
              <TabButton
                active={activeTab === 'prevent'}
                onClick={() => setActiveTab('prevent')}
                icon={<Shield className="w-4 h-4" />}
              >
                Prevent
              </TabButton>
            </div>

            {renderImplementationContent()}
          </section>

          {/* Share and Engage Section */}
          <section className="border-t pt-8">
            <div className="flex justify-between items-center">
              <div className="space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share This Leak
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discuss in Discord
                </button>
              </div>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4 mr-2" />
                Submit Your Fix
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GrowthLeakPage;