export interface LandingContent {
  hero: {
    title: string;
    subtitle: string;
  };

  sectionOne: {
    title: string;
    subtitle: string;
    paragraphsAtLeft: string[];
    paragraphsAtRight: string[];
    boxedText: string[];
    additionalParagraph: string;
    redParagraph: string;
  };

  sectionTwo: {
    title: string;
    paragraphsAtLeft: string[];
    paragraphsAtRight: string[];
  };

  sectionThree: {
    title: string;
    paragraphsAtLeft: string[];
    paragraphsAtRight: string[];
    additionalParagraph: string;
  };

  CTA: {
    CTAText: string;
    CTAUrl: string;
  };
}
