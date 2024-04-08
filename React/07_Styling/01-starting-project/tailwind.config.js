/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 테일윈드에 폰트를 추가하고 싶을 때 쓰는 식별자 'fontFamily'
      fontFamily: {
        // 테일윈드에 사용자가 직접 추가하고 싶은 폰트 이름
        title: ['"Pacifico"', 'cursive'] // 기본, 대체
      }
    },
  },
  plugins: [],
}

