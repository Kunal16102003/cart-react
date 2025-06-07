import React from 'react';
import { Clock, User, Activity } from 'lucide-react';
import { Role } from '../../data/types';

interface DifficultyBadgeProps {
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty }) => {
  const getColor = () => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColor()}`}>
      <Activity className="w-3 h-3 mr-1" />
      {difficulty}
    </div>
  );
};

interface TimeframeBadgeProps {
  timeframe: string;
}

export const TimeframeBadge: React.FC<TimeframeBadgeProps> = ({ timeframe }) => {
  return (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
      <Clock className="w-3 h-3 mr-1" />
      {timeframe}
    </div>
  );
};

interface RoleBadgeProps {
  role: Role;
}

export const RoleBadge: React.FC<RoleBadgeProps> = ({ role }) => {
  const getRoleColor = () => {
    switch (role) {
      case Role.MARKETING: return 'bg-purple-100 text-purple-800';
      case Role.CONTENT: return 'bg-indigo-100 text-indigo-800';
      case Role.SEO: return 'bg-blue-100 text-blue-800';
      case Role.ANALYTICS: return 'bg-cyan-100 text-cyan-800';
      case Role.GROWTH: return 'bg-emerald-100 text-emerald-800';
      case Role.PAID_MEDIA: return 'bg-amber-100 text-amber-800';
      case Role.SOCIAL_MEDIA: return 'bg-rose-100 text-rose-800';
      case Role.PARTNERSHIPS: return 'bg-violet-100 text-violet-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor()}`}>
      <User className="w-3 h-3 mr-1" />
      {role}
    </div>
  );
};