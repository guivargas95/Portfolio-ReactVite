/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.tsx",
    "./src/components/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        paleta: {
          azul1: '#74ABF2',
          azul2: '#2B80F0',
          azul3: '#174682',
          azul4: '#0D2647',
          cinza: '#8299b0',
        },
      },
      fontFamily: {
        padrao: ['Ibarra Real Nova', 'serif'],
        logo: ['Caveat', 'cursive'],
        logo2: ['Pacifico', 'cursive']
      }
    },
  },
  plugins: [],
}
