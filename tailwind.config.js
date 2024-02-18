/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      backgroundImage: {
        'earphone': "url('./images/earphone.png')",
        'watch': "url('./images/watch.png')",
        'laptop': "url('./images/laptop.png')",
        'console': "url('./images/console.png')",
        'earbud': "url('./images/earbud.png')",
        'speaker': "url('./images/speaker.png')",
      } ,

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

