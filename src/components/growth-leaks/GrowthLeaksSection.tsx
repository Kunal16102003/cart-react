import React, { useState, useMemo } from 'react';
import { growthLeaks } from '../../data/leakData';
import FilterControls from './FilterControls';
import { Role, Pillar, pillarInfo } from '../../data/types';
import { BarChart, ChevronDown, ChevronUp } from 'lucide-react';
import GrowthLeaksTable from './GrowthLeaksTable';

interface GrowthLeaksSectionProps {
  showLeaks?: boolean;
}

const GrowthLeaksSection: React.FC<GrowthLeaksSectionProps> = ({ showLeaks = true }) => {
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);
  const [selectedLeak, setSelectedLeak] = useState<string | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<Pillar | null>(null);
  const [isLeaksExpanded, setIsLeaksExpanded] = useState(true);

  const roles = useMemo(() => {
    const uniqueRoles = new Set(growthLeaks.map(leak => leak.responsibleRole));
    return Array.from(uniqueRoles);
  }, []);

  const pillarCounts = useMemo(() => {
    const counts: Record<Pillar, number> = Object.values(Pillar).reduce((acc, pillar) => {
      acc[pillar] = growthLeaks.filter(leak => leak.pillar === pillar).length;
      return acc;
    }, {} as Record<Pillar, number>);
    return counts;
  }, []);

  const totalLeaks = useMemo(() => {
    return growthLeaks.length;
  }, []);

  const pillarImpact: Record<Pillar, string[]> = {
    [Pillar.AWARENESS]: [
      '40-60% increase in brand visibility',
      '50% improvement in lead quality'
    ],
    [Pillar.ACQUISITION]: [
      '25-45% boost in conversion rates',
      '35% reduction in customer acquisition cost'
    ],
    [Pillar.ACTIVATION]: [
      '60% reduction in time-to-value',
      '40% increase in feature adoption'
    ],
    [Pillar.MONETIZATION]: [
      '40-55% increase in average revenue per account',
      '25% reduction in revenue churn'
    ],
    [Pillar.ENGAGEMENT]: [
      '45% boost in account engagement',
      '35% increase in product stickiness'
    ],
    [Pillar.RETENTION]: [
      '40-60% reduction in churn',
      '55% increase in customer lifetime value'
    ],
    [Pillar.EXPANSION]: [
      '35% increase in expansion revenue',
      '40% improvement in net revenue retention'
    ]
  };

  const filteredLeaks = useMemo(() => {
    return growthLeaks
      .filter(leak => !selectedPillar || leak.pillar === selectedPillar)
      .filter(leak => selectedRoles.length === 0 || selectedRoles.includes(leak.responsibleRole))
      .filter(leak => !selectedDifficulty || leak.difficulty === selectedDifficulty)
      .filter(leak => {
        if (!selectedSeverity) return true;
        switch (selectedSeverity) {
          case 'Critical': return leak.impactScore >= 8;
          case 'Moderate': return leak.impactScore >= 5 && leak.impactScore < 8;
          case 'Low': return leak.impactScore < 5;
          default: return true;
        }
      });
  }, [selectedRoles, selectedDifficulty, selectedSeverity, selectedPillar]);

  const formatImpactText = (text: string) => {
    const parts = text.match(/^(\d+(?:-\d+)?%)(.*)/);
    if (!parts) return text;

    const [_, percentage, description] = parts;
    return (
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-blue-400 whitespace-nowrap">
          {percentage}
        </span>
        <span className="text-gray-300">{description}</span>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="w-[90%] mx-auto py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Growth Leaks Library
            </h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {totalLeaks} total leaks
            </span>
          </div>
          <p className="text-xl text-gray-600">
            Prioritized leaks to maximize your growth potential
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Customer Journey Stage */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-700">Customer Journey Stage</h3>
              <p className="text-sm text-gray-500">Select a stage to view relevant growth leaks</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
              {Object.values(Pillar).map((pillar) => (
                <button
                  key={pillar}
                  onClick={() => setSelectedPillar(pillar === selectedPillar ? null : pillar)}
                  onMouseEnter={() => setHoveredPillar(pillar)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  className={`relative p-4 rounded-lg transition-all ${
                    selectedPillar === pillar
                      ? 'bg-blue-500 text-white shadow-lg transform scale-102 ring-4 ring-blue-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className={`mb-2 flex items-center justify-center w-12 h-12 rounded-full ${
                      selectedPillar === pillar ? 'bg-white bg-opacity-20' : 'bg-gray-100'
                    }`}>
                      <div className={`text-3xl ${
                        selectedPillar === pillar ? 'text-white' : 'text-blue-500'
                      }`}>
                        {pillarInfo[pillar].icon}
                      </div>
                    </div>
                    <div className="font-medium text-sm">{pillar}</div>
                    <div className={`text-xs mt-1 ${
                      selectedPillar === pillar ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {pillarCounts[pillar]} Leaks
                    </div>
                  </div>
                  
                  {/* Impact information - shown on hover or when selected */}
                  {(hoveredPillar === pillar || selectedPillar === pillar) && (
                    <div className="absolute z-10 w-80 p-4 bg-gray-900 text-white text-sm rounded-lg shadow-xl -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full border border-gray-700">
                      <div className="font-semibold mb-3 text-gray-200">Business Impact:</div>
                      <div className="space-y-3">
                        {pillarImpact[pillar].map((impact, index) => (
                          <div key={index} className="text-left">
                            {formatImpactText(impact)}
                          </div>
                        ))}
                      </div>
                      {/* Arrow */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45 border-r border-b border-gray-700"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {showLeaks && (
            <div className="space-y-4">
              {/* Expandable Section Header */}
              <button
                onClick={() => setIsLeaksExpanded(!isLeaksExpanded)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Growth Leaks Analysis</span>
                  {filteredLeaks.length > 0 && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {filteredLeaks.length} leaks
                    </span>
                  )}
                </div>
                {isLeaksExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Expandable Content */}
              {isLeaksExpanded && (
                <div className="flex gap-6">
                  {/* Left Sidebar with Filters */}
                  <FilterControls
                    roles={roles}
                    selectedRole={selectedRoles}
                    setSelectedRole={setSelectedRoles}
                    selectedDifficulty={selectedDifficulty}
                    setSelectedDifficulty={setSelectedDifficulty}
                    selectedSeverity={selectedSeverity}
                    setSelectedSeverity={setSelectedSeverity}
                  />

                  {/* Main Content Area */}
                  <div className="flex-grow">
                    {filteredLeaks.length > 0 ? (
                      <GrowthLeaksTable
                        data={filteredLeaks}
                        onViewSolution={(id) => setSelectedLeak(id)}
                      />
                    ) : (
                      <div className="bg-gray-800 rounded-lg shadow-md p-8 text-center">
                        <BarChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-gray-100 mb-2">No growth leaks match your filters</h3>
                        <p className="text-gray-400">Try adjusting your filter criteria to see more results.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Solution Modal */}
        {selectedLeak && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Fix Strategy</h3>
              <p className="text-gray-300 mb-4">
                {growthLeaks.find(leak => leak.id === selectedLeak)?.solution}
              </p>
              <button
                onClick={() => setSelectedLeak(null)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GrowthLeaksSection;