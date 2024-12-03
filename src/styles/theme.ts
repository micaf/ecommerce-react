const sharedTheme = {
    typography: {
      fontFamily: "'Roboto', sans-serif",
      fontSizes: {
        xsmall: "10px",
        small: "12px",
        medium: "16px",
        large: "24px",
        xlarge: "32px",
      },
      fontWeights: {
        light: 300,
        regular: 400,
        bold: 700,
      },
      lineHeights: {
        small: "1.2",
        medium: "1.5",
        large: "1.8",
      },
    },
    spacing: {
      xsmall: "4px",
      small: "8px",
      medium: "16px",
      large: "24px",
      xlarge: "32px",
    },
    borders: {
      radius: {
        small: "4px",
        medium: "8px",
        large: "16px",
      },
      width: {
        thin: "1px",
        thick: "2px",
      },
    },
    shadows: {
      small: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      medium: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      large: "0px 8px 16px rgba(0, 0, 0, 0.1)",
    },
  };
  
  export const lightTheme = {
    ...sharedTheme,
    colors: {
      primary: "#000000", // Main text or action color
      secondary: "#6C63FF", // Accent color for buttons or highlights
      background: "#FFFFFF", // Page background
      heroBackground: "#CCCCCC",
      surface: "#FFFFFF", // Card or modal background
      border: "#E0E0E0", // Borders for containers or inputs
      iconColor: "#CCCCCC", // Default icon color
      textPrimary: "#333333", // Main text
      textSecondary: "#6D6D6D", // Subtitles or less prominent text
      textPlaceholder: "#A0A0A0", // Placeholder text
      success: "#4CAF50", // Success notifications or status
      error: "#FF5252", // Error notifications or status
      warning: "#FFC107", // Warning notifications or status
      overlay: "rgba(0, 0, 0, 0.5)", // Overlay for modals or dropdowns
    },
  };
  
  export const darkTheme = {
    ...sharedTheme,
    colors: {
      primary: "#FFFFFF", // Main text or action color
      secondary: "#6C63FF", // Accent color for buttons or highlights
      background: "#121212", // Page background
      heroBackground: "#444444",
      surface: "#1E1E1E", // Card or modal background
      border: "#333333", // Borders for containers or inputs
      iconColor: "#444444", // Default icon color
      textPrimary: "#F9F9F9", // Main text
      textSecondary: "#A0A0A0", // Subtitles or less prominent text
      textPlaceholder: "#6D6D6D", // Placeholder text
      success: "#4CAF50", // Success notifications or status
      error: "#FF5252", // Error notifications or status
      warning: "#FFC107", // Warning notifications or status
      overlay: "rgba(255, 255, 255, 0.5)", // Overlay for modals or dropdowns
    },
  };
  