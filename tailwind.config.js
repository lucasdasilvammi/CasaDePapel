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
        "title" : "44px",
        "petit" : "10px",
        "home-desc" : "20px",

        "title" : "44px",
        "petit" : "10px",
        "desc-phone" : "16px"
      },
      gap:{
        "espace" : "54px"
      },
      padding:{
        "marge" : "12%",
        "marge-tablet" : "8%",
        "marge-phone" : "5%",

        "bord" : "65px",
        "top-btn" : "20px",
        "bottom-btn" : "44px",
      },
      width:{
        "home-desc" : "46ch",
      },
      maxWidth:{
        "home-desc" : "46ch",
        "kalash" : "3rem",
        "kalash-md" : "6rem",
      },
      letterSpacing:{
        "home-desc" : "10%",
      }
    },
  },
  plugins: [],
}