/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F4',
        'cream-dark': '#F5EDE6',
        'brown-dark': '#4A3728',
        'brown-medium': '#6B5744',
        'brown-light': '#8B7D6B',
        'brown-muted': '#A69484',
        'rose': '#C49B8B',
        'rose-dark': '#B8866B',
        'rose-dusty': '#D4A99A',
        'blush': '#E8D5CC',
        'gold': '#9B8B7B',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'cursive': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
