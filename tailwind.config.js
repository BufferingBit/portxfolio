/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./views/**/*.ejs",
    "./views/partials/**/*.ejs",
    "./public/**/*.{js,css}",
  ],
  theme: {
    extend: {
      colors: {
        space: "#0F0F1A", // Deep space/fantasy twilight
        gold: "#FCD34D", // Gold glow
        steel: "#4B5563", // Muted steel
        light: "#F3F4F6", // Light gray
        dimmed: "#9CA3AF", // Muted gray
        arcane: "#3B82F6", // Arcane blue
        danger: "#EF4444", // Health bar / error states
        success: "#10B981", // Success badge / XP gain glow
      },
    },
  },
  plugins: [],
};
