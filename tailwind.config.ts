import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotocondensed: ["Roboto Condensed", "sans-serif"],
        robotoslab: ["Roboto Slab", "sans-serif"],
      },
      height: {
        "176": "44rem;",
        "184": "46rem;",
        "232": "58rem;",
      },
      width: {
        "128": "32rem;",
        "176": "44rem;",
      },
      backgroundImage: {
        login: "url('img/forest-bg.jpg')",
        personalfinanceIcon: "url('img/personal_finance.png')",
        homefinanceIcon: "url('img/home_finance.png')",
        carfinanceIcon: "url('img/car_finance.png')",
        businessfinanceIcon: "url('img/business_finance.png')",
        filemissingIcon: "url('img/file_missing.png')",
        maybankiIcon: "url('img/maybank_i.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
