import React from 'react';
import { Megaphone, Package, Rocket, DollarSign, BarChart2, Users, TrendingUp } from 'lucide-react';

export enum Role {
  ANALYTICS = 'Analytics',
  BILLING_MANAGER = 'Billing Manager',
  COMMUNITY_MANAGER = 'Community Manager',
  CONTENT = 'Content',
  CRO = 'CRO',
  CUSTOMER_SUCCESS = 'Customer Success',
  CUSTOMER_SUPPORT = 'Customer Support',
  DEMAND_GEN = 'Demand Gen',
  FOUNDER = 'Founder',
  GROWTH = 'Growth',
  GROWTH_ANALYST = 'Growth Analyst',
  GROWTH_MARKETER = 'Growth Marketer',
  HEAD_OF_GROWTH = 'Head of Growth',
  HEAD_OF_MARKETING = 'Head of Marketing',
  HEAD_OF_SALES = 'Head of Sales',
  HEAD_OF_SUPPORT = 'Head of Support',
  MARKETING = 'Marketing',
  PAID_MEDIA = 'Paid Media',
  PARTNERSHIPS = 'Partnerships',
  PRODUCT_ANALYST = 'Product Analyst',
  PRODUCT_GROWTH = 'Product Growth',
  PRODUCT_MANAGER = 'Product Manager',
  PRODUCT_MARKETING = 'Product Marketing',
  SALES_ENABLEMENT = 'Sales Enablement',
  SEO = 'SEO',
  SOCIAL_MEDIA = 'Social Media',
  UX_LEAD = 'UX Lead'
}

export enum Pillar {
  AWARENESS = 'Awareness',
  ACQUISITION = 'Acquisition',
  ACTIVATION = 'Activation',
  MONETIZATION = 'Monetization',
  ENGAGEMENT = 'Engagement',
  RETENTION = 'Retention',
  EXPANSION = 'Expansion'
}

export interface PillarInfo {
  name: Pillar;
  icon: JSX.Element;
  description: string;
}

export const pillarInfo: Record<Pillar, PillarInfo> = {
  [Pillar.AWARENESS]: {
    name: Pillar.AWARENESS,
    icon: <Megaphone size={32} strokeWidth={1.5} />,
    description: 'Top of funnel visibility and brand recognition'
  },
  [Pillar.ACQUISITION]: {
    name: Pillar.ACQUISITION,
    icon: <Package size={32} strokeWidth={1.5} />,
    description: 'Converting visitors into leads and signups'
  },
  [Pillar.ACTIVATION]: {
    name: Pillar.ACTIVATION,
    icon: <Rocket size={32} strokeWidth={1.5} />,
    description: 'Getting users to experience core value'
  },
  [Pillar.MONETIZATION]: {
    name: Pillar.MONETIZATION,
    icon: <DollarSign size={32} strokeWidth={1.5} />,
    description: 'Converting free users to paying customers'
  },
  [Pillar.ENGAGEMENT]: {
    name: Pillar.ENGAGEMENT,
    icon: <BarChart2 size={32} strokeWidth={1.5} />,
    description: 'Driving regular product usage and adoption'
  },
  [Pillar.RETENTION]: {
    name: Pillar.RETENTION,
    icon: <Users size={32} strokeWidth={1.5} />,
    description: 'Keeping customers active and satisfied'
  },
  [Pillar.EXPANSION]: {
    name: Pillar.EXPANSION,
    icon: <TrendingUp size={32} strokeWidth={1.5} />,
    description: 'Growing revenue from existing customers'
  }
};