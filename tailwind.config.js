/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      width:{
        
      },
    },
    screens:{
      'mx-md':{'max':'768px'},
      'mx-sm':{'max':'360px'},
    },
  },
  plugins: [],
}

