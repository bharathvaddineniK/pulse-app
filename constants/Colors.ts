// This file defines the official color palette for the Pulse app.
// It translates the design system from the specification document into a reusable theme.

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    // Core App Colors from the design document
    background: '#121212', // Background (Dark)
    primaryText: '#EAEAEA',
    secondaryText: '#8A8A8A',
    surface: '#1E1E1E',

    // Accent Colors from the design document
    accentCalm: '#00FFFF',   // Teal
    accentElevated: '#FFBF00', // Amber
    accentUrgent: '#D32F2F',  // Crimson

    // Standard Theme properties (can be customized further if needed)
    text: '#EAEAEA',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};