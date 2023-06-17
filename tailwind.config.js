/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#c98842",
        
"secondary": "#76e276",
        
"accent": "#3f1eaa",
        
"neutral": "#32283e",
        
"base-100": "#0000",
        
"info": "#1f73e0",
        
"success": "#189168",
        
"warning": "#8d710c",
        
"error": "#f9484b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

