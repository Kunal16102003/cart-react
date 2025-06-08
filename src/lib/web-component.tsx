import React, { useState, useMemo } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { growthLeaks } from '../data/leakData';
import { Pillar, Role, pillarInfo } from '../data/types';

interface GrowthLeakProps {
  customerStage?: Pillar;
  showLeaks?: boolean;
}

// Filter Controls Component
const FilterControls: React.FC<{
  roles: Role[];
  selectedRole: Role[];
  setSelectedRole: (roles: Role[]) => void;
  selectedDifficulty: string | null;
  setSelectedDifficulty: (difficulty: string | null) => void;
  selectedSeverity: string | null;
  setSelectedSeverity: (severity: string | null) => void;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}> = ({
  roles,
  selectedRole,
  setSelectedRole,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedSeverity,
  setSelectedSeverity,
  isExpanded,
  setIsExpanded,
}) => {
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const difficultyLevels = ['Easy', 'Medium', 'Hard'];
  const severityLevels = ['All', 'Critical', 'Moderate', 'Low'];

  const getDifficultyIndex = () => {
    if (!selectedDifficulty) return -1;
    return difficultyLevels.indexOf(selectedDifficulty);
  };

  const getSeverityIndex = () => {
    if (!selectedSeverity) return 0;
    return severityLevels.indexOf(selectedSeverity);
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value);
    setSelectedDifficulty(index === -1 ? null : difficultyLevels[index]);
  };

  const handleSeverityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value);
    setSelectedSeverity(index === 0 ? null : severityLevels[index]);
  };

  const toggleRole = (role: Role) => {
    if (selectedRole.includes(role)) {
      setSelectedRole(selectedRole.filter(r => r !== role));
    } else {
      setSelectedRole([...selectedRole, role]);
    }
  };

  const removeRole = (role: Role) => {
    setSelectedRole(selectedRole.filter(r => r !== role));
  };

  const hasActiveFilters = selectedRole.length > 0 || selectedDifficulty !== null || selectedSeverity !== null;

  return (
    <div className={`bg-gray-800 rounded-lg shadow transition-all duration-300 ${isExpanded ? 'w-80' : 'w-16'} sticky top-4`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-center text-gray-100 hover:bg-gray-700 transition-colors duration-200"
      >
        {isExpanded ? (
          <div className="flex items-center gap-2">
            <span>🔍</span>
            <span>Filters</span>
            <span>◀</span>
            {hasActiveFilters && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                Active
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span>🔍</span>
            <span>▶</span>
            {hasActiveFilters && (
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            )}
          </div>
        )}
      </button>
      
      {isExpanded && (
        <div className="p-6 space-y-6">
          {/* Role Multi-select */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
              <span>👥</span>
              <span className="ml-1">Responsible Roles</span>
            </label>

            {/* Selected Roles Display */}
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedRole.map(role => (
                <span
                  key={role}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-100"
                >
                  {role}
                  <button
                    onClick={() => removeRole(role)}
                    className="ml-1 hover:text-blue-200"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <button
              onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
              className="w-full px-4 py-2 text-left text-sm border border-gray-700 rounded-md text-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700"
            >
              {selectedRole.length === 0 ? 'Select roles...' : `${selectedRole.length} roles selected`}
            </button>

            {/* Role Dropdown */}
            {isRoleDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-gray-800 rounded-md shadow-lg border border-gray-700 max-h-96 overflow-auto">
                {roles.map(role => (
                  <label
                    key={role}
                    className="flex items-center px-3 py-2 hover:bg-gray-700 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedRole.includes(role)}
                      onChange={() => toggleRole(role)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                    />
                    <span className="ml-2 text-sm text-gray-300">{role}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Impact Level Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                <span>⚡</span>
                <span className="ml-1">Impact Level: {selectedSeverity || 'All'}</span>
              </label>
              <input
                type="range"
                min="0"
                max="3"
                value={getSeverityIndex()}
                onChange={handleSeverityChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
                {severityLevels.map(level => (
                  <span key={level}>{level}</span>
                ))}
              </div>
            </div>

            {/* Difficulty Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                <span>🎯</span>
                <span className="ml-1">Implementation Difficulty: {selectedDifficulty || 'All'}</span>
              </label>
              <input
                type="range"
                min="-1"
                max="2"
                value={getDifficultyIndex()}
                onChange={handleDifficultyChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
                <span>All</span>
                {difficultyLevels.map(level => (
                  <span key={level}>{level}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Table Component
const GrowthLeaksTable: React.FC<{ data: any[] }> = ({ data }) => {
  const [columnVisibility, setColumnVisibility] = useState({
    role: true,
    difficulty: false,
    timeframe: false,
    impactScore: true,
    impactMetric: false
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-end gap-4">
          <span className="text-sm font-medium text-gray-700">Show/Hide Columns:</span>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, impactScore: !prev.impactScore }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.impactScore
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Impact Score
          </button>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, impactMetric: !prev.impactMetric }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.impactMetric
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Impact Metric
          </button>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, role: !prev.role }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.role
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Role
          </button>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, difficulty: !prev.difficulty }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.difficulty
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Difficulty
          </button>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, timeframe: !prev.timeframe }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.timeframe
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Timeframe
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Leak Name
              </th>
              {columnVisibility.impactScore && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impact
                </th>
              )}
              {columnVisibility.impactMetric && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metric
                </th>
              )}
              {columnVisibility.role && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              )}
              {columnVisibility.difficulty && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
              )}
              {columnVisibility.timeframe && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeframe
                </th>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map(leak => (
              <tr key={leak.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{leak.emoji}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {leak.name}
                      </div>
                      <div className="text-sm text-gray-500">{leak.description}</div>
                    </div>
                  </div>
                </td>
                {columnVisibility.impactScore && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${
                        leak.impactScore >= 8 ? 'bg-red-500' :
                        leak.impactScore >= 5 ? 'bg-amber-500' : 'bg-green-500'
                      }`}></div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-gray-500">Impact</span>
                        <div className="flex items-center">
                          <span className="text-sm font-bold mr-2">{leak.impactScore}/10</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            leak.impactScore >= 8 ? 'bg-red-100 text-red-800' : 
                            leak.impactScore >= 5 ? 'bg-amber-100 text-amber-800' : 
                            'bg-green-100 text-green-800'
                          }`}>
                            {leak.impactScore >= 8 ? 'Critical' : leak.impactScore >= 5 ? 'Moderate' : 'Low'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                )}
                {columnVisibility.impactMetric && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">
                      <span className="font-semibold text-amber-500">
                        {leak.impactMetric.split(' ')[0]}
                      </span>
                      <span className="text-gray-900">
                        {' ' + leak.impactMetric.split(' ').slice(1).join(' ')}
                      </span>
                    </div>
                  </td>
                )}
                {columnVisibility.role && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      👤 {leak.responsibleRole}
                    </span>
                  </td>
                )}
                {columnVisibility.difficulty && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      leak.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      leak.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      ⚡ {leak.difficulty}
                    </span>
                  </td>
                )}
                {columnVisibility.timeframe && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      ⏱️ {leak.timeframe}
                    </span>
                  </td>
                )}
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Get Fix Strategy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main React component for rendering growth leaks
const GrowthLeaksComponent: React.FC<GrowthLeakProps> = ({ 
  customerStage, 
  showLeaks = true 
}) => {
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(customerStage || null);
  const [hoveredPillar, setHoveredPillar] = useState<Pillar | null>(null);
  const [isLeaksExpanded, setIsLeaksExpanded] = useState(true);
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(true);

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

  if (!showLeaks) {
    return (
      <div className="growth-leaks-overview">
        <div className="w-full mx-auto py-12">
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
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="growth-leaks-library">
      <div className="w-full mx-auto py-12">
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
          
          <div className="space-y-4">
            {/* Expandable Section Header */}
            <button
              onClick={() => setIsLeaksExpanded(!isLeaksExpanded)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>📊</span>
                <span className="font-medium text-gray-900">Growth Leaks Analysis</span>
                {filteredLeaks.length > 0 && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {filteredLeaks.length} leaks
                  </span>
                )}
              </div>
              {isLeaksExpanded ? (
                <span>🔼</span>
              ) : (
                <span>🔽</span>
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
                  isExpanded={isFiltersExpanded}
                  setIsExpanded={setIsFiltersExpanded}
                />

                {/* Main Content Area */}
                <div className="flex-grow">
                  {filteredLeaks.length > 0 ? (
                    <GrowthLeaksTable data={filteredLeaks} />
                  ) : (
                    <div className="bg-gray-800 rounded-lg shadow-md p-8 text-center">
                      <span className="text-4xl mb-4 block">📊</span>
                      <h3 className="text-xl font-medium text-gray-100 mb-2">No growth leaks match your filters</h3>
                      <p className="text-gray-400">Try adjusting your filter criteria to see more results.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Web Component class
class GrowthLeaksLibrary extends HTMLElement {
  private root: Root | null = null;
  private mountPoint: HTMLDivElement | null = null;

  static get observedAttributes() {
    return ['customer-stage', 'show-leaks'];
  }

  connectedCallback() {
    this.injectStyles();
    this.render();
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  private injectStyles() {
    // Check if styles are already injected
    if (document.getElementById('growth-leaks-styles')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'growth-leaks-styles';
    style.textContent = `
      /* Tailwind CSS Reset and Base Styles */
      .growth-leaks-library *, .growth-leaks-overview * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .growth-leaks-library, .growth-leaks-overview {
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        -moz-tab-size: 4;
        tab-size: 4;
        -webkit-font-feature-settings: normal;
        font-feature-settings: normal;
        font-variation-settings: normal;
      }

      /* Container and Layout */
      .container { max-width: 1200px; margin: 0 auto; }
      .mx-auto { margin-left: auto; margin-right: auto; }
      .w-full { width: 100%; }
      .w-16 { width: 4rem; }
      .w-80 { width: 20rem; }
      .w-3 { width: 0.75rem; }
      .w-4 { width: 1rem; }
      .w-5 { width: 1.25rem; }
      .w-12 { width: 3rem; }
      .h-2 { height: 0.5rem; }
      .h-3 { height: 0.75rem; }
      .h-4 { height: 1rem; }
      .h-5 { height: 1.25rem; }
      .h-12 { width: 3rem; }
      .max-w-4xl { max-width: 56rem; }
      .flex { display: flex; }
      .flex-grow { flex-grow: 1; }
      .flex-col { flex-direction: column; }
      .flex-wrap { flex-wrap: wrap; }
      .items-center { align-items: center; }
      .items-start { align-items: flex-start; }
      .items-baseline { align-items: baseline; }
      .justify-center { justify-content: center; }
      .justify-between { justify-content: space-between; }
      .justify-end { justify-content: flex-end; }
      .gap-2 { gap: 0.5rem; }
      .gap-3 { gap: 0.75rem; }
      .gap-4 { gap: 1rem; }
      .gap-6 { gap: 1.5rem; }
      .space-y-3 > * + * { margin-top: 0.75rem; }
      .space-y-4 > * + * { margin-top: 1rem; }
      .space-y-6 > * + * { margin-top: 1.5rem; }

      /* Grid */
      .grid { display: grid; }
      .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }

      /* Padding and Margin */
      .p-4 { padding: 1rem; }
      .p-6 { padding: 1.5rem; }
      .p-8 { padding: 2rem; }
      .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
      .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
      .px-4 { padding-left: 1rem; padding-right: 1rem; }
      .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
      .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
      .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
      .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
      .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
      .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
      .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
      .px-2\.5 { padding-left: 0.625rem; padding-right: 0.625rem; }
      .py-0\.5 { padding-top: 0.125rem; padding-bottom: 0.125rem; }
      .mb-2 { margin-bottom: 0.5rem; }
      .mb-3 { margin-bottom: 0.75rem; }
      .mb-4 { margin-bottom: 1rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .mb-8 { margin-bottom: 2rem; }
      .mb-12 { margin-bottom: 3rem; }
      .mr-1 { margin-right: 0.25rem; }
      .mr-2 { margin-right: 0.5rem; }
      .mr-4 { margin-right: 1rem; }
      .ml-1 { margin-left: 0.25rem; }
      .ml-2 { margin-left: 0.5rem; }
      .mt-1 { margin-top: 0.25rem; }
      .mt-6 { margin-top: 1.5rem; }

      /* Typography */
      .text-xs { font-size: 0.75rem; line-height: 1rem; }
      .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
      .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
      .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
      .text-2xl { font-size: 1.5rem; line-height: 2rem; }
      .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
      .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
      .font-medium { font-weight: 500; }
      .font-semibold { font-weight: 600; }
      .font-bold { font-weight: 700; }
      .text-left { text-align: left; }
      .text-center { text-align: center; }
      .uppercase { text-transform: uppercase; }
      .tracking-wider { letter-spacing: 0.05em; }
      .leading-relaxed { line-height: 1.625; }
      .whitespace-nowrap { white-space: nowrap; }

      /* Colors */
      .text-gray-100 { color: rgb(243 244 246); }
      .text-gray-200 { color: rgb(229 231 235); }
      .text-gray-300 { color: rgb(209 213 219); }
      .text-gray-400 { color: rgb(156 163 175); }
      .text-gray-500 { color: rgb(107 114 128); }
      .text-gray-600 { color: rgb(75 85 99); }
      .text-gray-700 { color: rgb(55 65 81); }
      .text-gray-800 { color: rgb(31 41 55); }
      .text-gray-900 { color: rgb(17 24 39); }
      .text-blue-100 { color: rgb(219 234 254); }
      .text-blue-200 { color: rgb(191 219 254); }
      .text-blue-400 { color: rgb(96 165 250); }
      .text-blue-500 { color: rgb(59 130 246); }
      .text-blue-600 { color: rgb(37 99 235); }
      .text-blue-800 { color: rgb(30 64 175); }
      .text-red-800 { color: rgb(153 27 27); }
      .text-amber-500 { color: rgb(245 158 11); }
      .text-amber-600 { color: rgb(217 119 6); }
      .text-amber-800 { color: rgb(146 64 14); }
      .text-green-800 { color: rgb(22 101 52); }
      .text-purple-800 { color: rgb(107 33 168); }
      .text-white { color: rgb(255 255 255); }

      /* Background Colors */
      .bg-white { background-color: rgb(255 255 255); }
      .bg-gray-50 { background-color: rgb(249 250 251); }
      .bg-gray-100 { background-color: rgb(243 244 246); }
      .bg-gray-700 { background-color: rgb(55 65 81); }
      .bg-gray-800 { background-color: rgb(31 41 55); }
      .bg-gray-900 { background-color: rgb(17 24 39); }
      .bg-blue-100 { background-color: rgb(219 234 254); }
      .bg-blue-200 { background-color: rgb(191 219 254); }
      .bg-blue-500 { background-color: rgb(59 130 246); }
      .bg-blue-600 { background-color: rgb(37 99 235); }
      .bg-blue-900 { background-color: rgb(30 58 138); }
      .bg-red-100 { background-color: rgb(254 226 226); }
      .bg-red-500 { background-color: rgb(239 68 68); }
      .bg-amber-100 { background-color: rgb(254 243 199); }
      .bg-amber-500 { background-color: rgb(245 158 11); }
      .bg-green-100 { background-color: rgb(220 252 231); }
      .bg-green-500 { background-color: rgb(34 197 94); }
      .bg-purple-100 { background-color: rgb(243 232 255); }

      /* Background Opacity */
      .bg-opacity-20 { --tw-bg-opacity: 0.2; }

      /* Borders */
      .border { border-width: 1px; }
      .border-b { border-bottom-width: 1px; }
      .border-r { border-right-width: 1px; }
      .border-gray-100 { border-color: rgb(243 244 246); }
      .border-gray-200 { border-color: rgb(229 231 235); }
      .border-gray-700 { border-color: rgb(55 65 81); }
      .border-blue-500 { border-color: rgb(59 130 246); }
      .border-transparent { border-color: transparent; }
      .divide-y > * + * { border-top-width: 1px; }
      .divide-gray-200 > * + * { border-color: rgb(229 231 235); }

      /* Border Radius */
      .rounded { border-radius: 0.25rem; }
      .rounded-md { border-radius: 0.375rem; }
      .rounded-lg { border-radius: 0.5rem; }
      .rounded-xl { border-radius: 0.75rem; }
      .rounded-full { border-radius: 9999px; }

      /* Shadows */
      .shadow { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); }
      .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
      .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
      .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
      .shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }

      /* Ring */
      .ring-4 { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }
      .ring-blue-200 { --tw-ring-color: rgb(191 219 254); }

      /* Position */
      .relative { position: relative; }
      .absolute { position: absolute; }
      .sticky { position: sticky; }
      .top-4 { top: 1rem; }
      .bottom-0 { bottom: 0px; }
      .left-1\/2 { left: 50%; }
      .-top-2 { top: -0.5rem; }
      .z-10 { z-index: 10; }

      /* Transform */
      .transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
      .-translate-x-1\/2 { --tw-translate-x: -50%; }
      .-translate-y-full { --tw-translate-y: -100%; }
      .translate-y-1\/2 { --tw-translate-y: 50%; }
      .scale-102 { --tw-scale-x: 1.02; --tw-scale-y: 1.02; }
      .rotate-45 { --tw-rotate: 45deg; }

      /* Display */
      .block { display: block; }
      .inline-flex { display: inline-flex; }
      .table { display: table; }
      .hidden { display: none; }

      /* Overflow */
      .overflow-hidden { overflow: hidden; }
      .overflow-x-auto { overflow-x: auto; }
      .overflow-auto { overflow: auto; }

      /* Cursor */
      .cursor-pointer { cursor: pointer; }

      /* Transitions */
      .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
      .duration-200 { transition-duration: 200ms; }
      .duration-300 { transition-duration: 300ms; }

      /* Hover Effects */
      .hover\\:bg-gray-50:hover { background-color: rgb(249 250 251); }
      .hover\\:bg-gray-100:hover { background-color: rgb(243 244 246); }
      .hover\\:bg-gray-200:hover { background-color: rgb(229 231 235); }
      .hover\\:bg-gray-700:hover { background-color: rgb(55 65 81); }
      .hover\\:bg-blue-700:hover { background-color: rgb(29 78 216); }
      .hover\\:border-blue-500:hover { border-color: rgb(59 130 246); }
      .hover\\:text-blue-200:hover { color: rgb(191 219 254); }
      .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); }

      /* Focus */
      .focus\\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
      .focus\\:ring-2:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }
      .focus\\:ring-blue-500:focus { --tw-ring-color: rgb(59 130 246); }
      .focus\\:ring-offset-2:focus { --tw-ring-offset-width: 2px; }

      /* Form Elements */
      input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
      }

      input[type="range"]::-webkit-slider-track {
        background: rgb(55 65 81);
        height: 0.5rem;
        border-radius: 0.5rem;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 50%;
        background: rgb(37 99 235);
        cursor: pointer;
      }

      input[type="range"]::-moz-range-track {
        background: rgb(55 65 81);
        height: 0.5rem;
        border-radius: 0.5rem;
        border: none;
      }

      input[type="range"]::-moz-range-thumb {
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 50%;
        background: rgb(37 99 235);
        cursor: pointer;
        border: none;
      }

      input[type="checkbox"] {
        accent-color: rgb(37 99 235);
      }

      /* Responsive */
      @media (min-width: 768px) {
        .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .md\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr)); }
      }

      /* Custom Scrollbar */
      .growth-leaks-library ::-webkit-scrollbar,
      .growth-leaks-overview ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      .growth-leaks-library ::-webkit-scrollbar-track,
      .growth-leaks-overview ::-webkit-scrollbar-track {
        background: rgb(243 244 246);
        border-radius: 4px;
      }

      .growth-leaks-library ::-webkit-scrollbar-thumb,
      .growth-leaks-overview ::-webkit-scrollbar-thumb {
        background: rgb(203 213 225);
        border-radius: 4px;
      }

      .growth-leaks-library ::-webkit-scrollbar-thumb:hover,
      .growth-leaks-overview ::-webkit-scrollbar-thumb:hover {
        background: rgb(148 163 184);
      }

      /* Table Specific Styles */
      .growth-leaks-library table {
        border-collapse: collapse;
        width: 100%;
      }

      .growth-leaks-library th,
      .growth-leaks-library td {
        border: none;
      }

      /* Button Styles */
      .growth-leaks-library button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
      }

      /* Max Height for Dropdowns */
      .max-h-96 { max-height: 24rem; }
    `;
    
    document.head.appendChild(style);
  }

  private render() {
    // Clean up previous render
    if (this.root) {
      this.root.unmount();
    }

    // Create mount point
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      this.appendChild(this.mountPoint);
    }

    // Get attributes
    const customerStage = this.getAttribute('customer-stage') as Pillar;
    const showLeaks = this.getAttribute('show-leaks') !== 'false';

    // Create React root and render
    this.root = createRoot(this.mountPoint);
    this.root.render(
      React.createElement(GrowthLeaksComponent, {
        customerStage,
        showLeaks
      })
    );
  }
}

// Register the custom element
if (!customElements.get('growth-leaks-library')) {
  customElements.define('growth-leaks-library', GrowthLeaksLibrary);
}

// Export for module usage
export { GrowthLeaksLibrary };