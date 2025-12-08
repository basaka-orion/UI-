export interface PrdSpecs {
  radius: string;
  shadow: string;
  font: string;
  colors: string;
}

export interface PrdData {
  name: string;
  specs: PrdSpecs;
  web: string;
  ios: string;
  android: string;
  mini: string;
}

export interface StyleItem {
  id: string;
  title: string;
  tier: 'T0' | 'T1' | 'T2' | 'T3';
  tierColorClass: string;
  description: string;
  application: string;
  // If true, uses a specialized component in InteractiveCards.tsx. 
  // If false/undefined, uses the generic HTML structure defined in constants.tsx
  hasCustomRender?: boolean; 
  // Generic render data for non-interactive simple cards
  genericRenderData?: {
    containerClass: string;
    contentHtml?: string; // We will use this to inject simple structures
    wrapperClass?: string;
  }
}

export interface FusionResult {
  id: string; // Unique timestamp ID
  name: string;
  description: string;
  css: string;
  html: string;
  prd: PrdData;
  parentStyles: string[]; // Names of parent styles
  timestamp: number;
}

export type Platform = 'web' | 'ios' | 'android' | 'mini';