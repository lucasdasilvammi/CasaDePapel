/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "rouge" : "#BD302D",
        "noir" : "#000000",
        "blanc" : "#FFFFFF",
      },
      textColor: {
        "rouge" : "#BD302D",
        "blanc" : "#FFFFFF",
        "noir" : "#000000",
      },
      fontFamily: {
        "ff-casa" : "'Coluna', sans-serif",
        "ff-roboto" : "'Roboto Condensed', sans-serif"
      },
      backgroundImage:{
        "home" : "url('./src/assets/bg-home.jpg')",
        "bg-banderole" : "url('./src/assets/banderole.jpg')",
        "wave" : "url('./src/assets/wave.png')",
        "footer" : "url('./src/assets/footer.png')",
        "gradient-header" : "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
      },
      fontSize: {
        "title" : "2.75rem",
        "petit" : "0.625rem",
        "home-desc" : "1.25rem",
        "desc-phone" : "1rem",
      },
      gap:{
        "espace" : "3.375rem",
      },
      padding:{
        "marge" : "12%",
        "marge-tablet" : "8%",
        "marge-phone" : "5%",

        "bord" : "4.0625rem",
        "top-btn" : "1.25rem",
        "bottom-btn" : "2.75rem",
      },
      width:{
        "home-desc" : "46ch",
      },
      maxWidth:{
        "home-desc" : "46ch",
        "kalash" : "3rem",
        "kalash-md" : "6rem",
        "video-md" : "30rem",
      },
      maxHeight:{
        "video-md": "22rem"
      },
      letterSpacing:{
        "home-desc" : "10%",
      }
    },
  },
  plugins: [],
}
