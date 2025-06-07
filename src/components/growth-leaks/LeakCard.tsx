import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { GrowthLeak } from '../../data/leakData';
import SeverityIndicator from './SeverityIndicator';
import { DifficultyBadge, TimeframeBadge, RoleBadge } from './BadgeComponents';

interface LeakCardProps {
  leak: GrowthLeak;
}

const LeakCard: React.FC<LeakCardProps> = ({ leak }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{leak.name}</h3>
          <SeverityIndicator score={leak.impactScore} />
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
            <span className="text-2xl font-bold text-amber-500">{leak.impactMetric}</span>
          </div>
          <p className="text-gray-600 text-sm">{leak.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <RoleBadge role={leak.responsibleRole} />
          <DifficultyBadge difficulty={leak.difficulty} />
          <TimeframeBadge timeframe={leak.timeframe} />
        </div>
        
        <div className="mt-4">
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 flex items-center justify-center">
            Get Fix Strategy
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeakCard;