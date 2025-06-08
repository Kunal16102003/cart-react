import React, { useState } from 'react';
import { Role } from '../../data/types';
import { Activity, Clock, Users, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

interface FilterControlsProps {
  roles: Role[];
  selectedRole: Role[];
  setSelectedRole: (roles: Role[]) => void;
  selectedDifficulty: string | null;
  setSelectedDifficulty: (difficulty: string | null) => void;
  selectedSeverity: string | null;
  setSelectedSeverity: (severity: string | null) => void;
}

// Role categories for better organization
const roleCategories = {
  'Marketing': [Role.MARKETING, Role.CONTENT, Role.SEO, Role.PAID_MEDIA, Role.SOCIAL_MEDIA, Role.DEMAND_GEN, Role.GROWTH_MARKETER],
  'Product': [Role.PRODUCT_MANAGER, Role.PRODUCT_GROWTH, Role.PRODUCT_MARKETING, Role.UX_LEAD, Role.PRODUCT_ANALYST],
  'Analytics': [Role.ANALYTICS, Role.GROWTH_ANALYST],
  'Leadership': [Role.FOUNDER, Role.HEAD_OF_GROWTH, Role.HEAD_OF_MARKETING, Role.HEAD_OF_SALES, Role.HEAD_OF_SUPPORT],
  'Customer Success': [Role.CUSTOMER_SUCCESS, Role.CUSTOMER_SUPPORT],
  'Growth': [Role.GROWTH, Role.CRO, Role.SALES_ENABLEMENT],
  'Other': [Role.BILLING_MANAGER, Role.COMMUNITY_MANAGER, Role.PARTNERSHIPS]
};

const FilterControls: React.FC<FilterControlsProps> = ({
  roles,
  selectedRole,
  setSelectedRole,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedSeverity,
  setSelectedSeverity,
}) => {
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
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

  // Filter out categories with no matching roles
  const availableCategories = Object.entries(roleCategories).reduce((acc, [category, categoryRoles]) => {
    const availableRoles = categoryRoles.filter(role => roles.includes(role));
    if (availableRoles.length > 0) {
      acc[category] = availableRoles;
    }
    return acc;
  }, {} as Record<string, Role[]>);

  return (
    <div className={`bg-gray-800 rounded-lg shadow transition-all duration-300 ${isExpanded ? 'w-[360px]' : 'w-16'} sticky top-4`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-center text-gray-100 hover:bg-gray-700 transition-colors duration-200"
      >
        {isExpanded ? (
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
            <ChevronLeft className="w-5 h-5" />
            {hasActiveFilters && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                Active
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Filter className="w-6 h-6" />
            <ChevronRight className="w-5 h-5" />
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
              <Users className="w-4 h-4 mr-1" />
              Responsible Roles
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
                    <X className="w-3 h-3" />
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
                {Object.entries(availableCategories).map(([category, categoryRoles]) => (
                  <div key={category} className="px-3 py-2">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      {category}
                    </h4>
                    <div className="space-y-1">
                      {categoryRoles.map(role => (
                        <label
                          key={role}
                          className="flex items-center px-2 py-1 hover:bg-gray-700 rounded cursor-pointer"
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
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Impact Level Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Impact Level: {selectedSeverity || 'All'}
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
                <Activity className="w-4 h-4 mr-1" />
                Implementation Difficulty: {selectedDifficulty || 'All'}
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

export default FilterControls;