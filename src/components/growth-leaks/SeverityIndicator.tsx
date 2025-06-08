import React from 'react';

interface SeverityIndicatorProps {
  score: number; // 1-10
}

const SeverityIndicator: React.FC<SeverityIndicatorProps> = ({ score }) => {
  // Determine color based on score
  const getColor = () => {
    if (score >= 8) return 'bg-red-500';
    if (score >= 5) return 'bg-amber-500';
    return 'bg-green-500';
  };
  
  // Determine label based on score
  const getLabel = () => {
    if (score >= 8) return 'Critical';
    if (score >= 5) return 'Moderate';
    return 'Low';
  };

  return (
    <div className="flex items-center">
      <div className={`w-3 h-3 rounded-full ${getColor()} mr-2`}></div>
      <div className="flex flex-col">
        <span className="text-xs font-medium text-gray-500">Impact</span>
        <div className="flex items-center">
          <span className="text-sm font-bold mr-2">{score}/10</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            score >= 8 ? 'bg-red-100 text-red-800' : 
            score >= 5 ? 'bg-amber-100 text-amber-800' : 
            'bg-green-100 text-green-800'
          }`}>
            {getLabel()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeverityIndicator;