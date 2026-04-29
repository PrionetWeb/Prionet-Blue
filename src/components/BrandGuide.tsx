// Brand Guide for Priority Pay Network
// This component serves as a reference for maintaining consistent branding

export const BrandGuide = {
  // Typography - using CSS variables from globals.css
  typography: {
    headings: {
      h1: 'var(--font-roboto)', // Main headlines - Roboto Bold 56px
      h2: 'var(--font-roboto)', // Section headers - Roboto Bold 48px  
      h3: 'var(--font-outfit)', // Subsection headers - Outfit Bold 32px
      h4: 'var(--font-outfit)', // Card titles - Outfit Bold 24px
    },
    body: {
      primary: 'var(--font-outfit)', // Primary body text - Outfit Regular 16px
      secondary: 'var(--font-inter)', // Available for specialized use
    }
  },

  // Color Palette - using CSS variables
  colors: {
    light: {
      primary: 'var(--primary)', // Professional Blue #3b82f6
      background: 'var(--background)', // Soft Mint Green #e9f3f1
      card: 'var(--card)', // Clean White #ffffff
      text: 'var(--foreground)', // Professional Gray #3f3f3f
    },
    dark: {
      primary: 'var(--primary)', // Bright Cyan #40e8ff
      background: 'var(--background)', // Professional Dark #3f3f3f
      card: 'var(--card)', // Matching Dark #3f3f3f
      text: 'var(--foreground)', // Clean White #ffffff
    }
  },

  // Brand Voice & Messaging
  messaging: {
    tagline: "Secure Medical Balance Management Network",
    valueProps: [
      "Privacy-first approach to medical balance management",
      "HIPAA-compliant secure platform", 
      "Transparent patient access with complete control",
      "Streamlined practitioner workflow"
    ],
    tone: "Professional, trustworthy, empathetic, secure, transparent"
  },

  // Visual Elements
  imagery: {
    style: "Professional, clean, modern medical environments",
    subjects: [
      "Health care professionals in modern settings",
      "Patient-practitioner consultations showing trust",
      "Clean, secure technology interfaces", 
      "Professional medical team collaboration",
      "Modern health care facilities"
    ],
    avoid: [
      "Outdated medical equipment",
      "Stressful or anxiety-inducing scenarios",
      "Complex technical interfaces",
      "Generic stock photography"
    ]
  },

  // Layout Principles
  layout: {
    spacing: "Generous whitespace using CSS variables",
    components: "Clean cards with rounded corners (--radius: 12px)",
    sections: "Alternating background colors for visual rhythm",
    responsive: "Mobile-first approach with modern grid layouts"
  }
};

// Export commonly used brand elements
export const brandColors = {
  primary: 'hsl(var(--primary))',
  background: 'hsl(var(--background))', 
  card: 'hsl(var(--card))',
  muted: 'hsl(var(--muted-foreground))'
};

export const brandTypography = {
  fontRoboto: 'var(--font-roboto)',
  fontOutfit: 'var(--font-outfit)', 
  fontInter: 'var(--font-inter)'
};