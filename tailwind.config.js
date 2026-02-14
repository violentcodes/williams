/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "williams-black": "var(--bg-primary)",
        "williams-blue": "var(--accent-williams)",
        "williams-silver": "var(--accent-silver)",
        "williams-text": "var(--text-primary)",
        "williams-muted": "var(--text-muted)",
      },
      fontFamily: {
        sans: ["var(--font-williams)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
      },
    },
  },
  plugins: [],
};
