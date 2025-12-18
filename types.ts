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
  hasCustomRender?: boolean; 
  genericRenderData?: {
    containerClass: string;
    contentHtml?: string;
    wrapperClass?: string;
  }
}

export interface FusionResult {
  id: string;
  name: string;
  description: string;
  css: string;
  html: string;
  prd: PrdData;
  parentStyles: string[];
  timestamp: number;
}

// Expert Persona Definition
export interface ExpertOpinion {
    role: 'CPO' | 'CTO' | 'Design Director';
    name: string;
    avatar: string;
    opinion: string;
    focus: string; // e.g. "User Retention" or "Scalability"
}

// Updated Project PRD with Soul & Research
export interface ProjectPrd {
  id: string;
  timestamp: number;
  title: string;
  userIdea: string;
  elevatorPitch: string;
  targetAudience: string;
  
  // NEW: Research Phase Data
  researchReport: string; // Summary of Google Search findings
  
  // NEW: The Round Table Session (Chinese)
  teamBrainstorming: ExpertOpinion[];

  // Design Strategy
  visualStyleFusion: {
    styleIds: string[];
    reasoning: string;
    colorPalette: string[];
  };

  // UI Preview
  previewHtml: string;
  previewCss: string;

  // Product Specs
  features: Array<{
    name: string;
    description: string;
    priority: 'P0' | 'P1' | 'P2';
  }>;

  // Tech Specs
  techStack: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
  };

  // Architecture
  databaseSchema: string;
  apiEndpoints: string;

  // NEW: Full Markdown Manual
  prdManual: string;
}

export type Platform = 'web' | 'ios' | 'android' | 'mini';