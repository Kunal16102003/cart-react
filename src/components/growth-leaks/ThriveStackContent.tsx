import React from 'react';
import { PlayCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ThriveStackContentProps {
  leakId: string;
}

const ThriveStackContent: React.FC<ThriveStackContentProps> = ({ leakId }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video Tutorial */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <PlayCircle className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Video Tutorial</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Watch our step-by-step guide on implementing this fix with ThriveStack.
          </p>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Watch Tutorial
          </button>
        </div>

        {/* Implementation Steps */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Implementation Steps</h3>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Configure ThriveStack dashboard</li>
            <li>Set up tracking parameters</li>
            <li>Implement automated monitoring</li>
            <li>Create alert thresholds</li>
          </ol>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900">Best Practices</h3>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Regular monitoring of metrics</li>
          <li>Set up automated alerts</li>
          <li>Document process changes</li>
          <li>Train team members on new procedures</li>
        </ul>
      </div>
    </div>
  );
};

export default ThriveStackContent;