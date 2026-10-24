module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bfe1ff',
          300: '#90c9ff',
          400: '#5aa7ff',
          500: '#2a7df3',
          600: '#195fcd',
          700: '#1b4fa8',
          800: '#1c4389',
          900: '#1d3a6d',
        },
      },
      boxShadow: {
        soft: '0 20px 40px rgba(14, 30, 37, 0.08)',
      },
    },
  },
  plugins: [],
};
