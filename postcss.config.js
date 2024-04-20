/*
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
*/
/*
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-pxtorem')({
      rootValue: 16, // 기본값
      propList: ['*'], // 모든 속성에 대해 변환 적용
      selectorBlackList: [/^body$/],
      replace: true, // 기존의 px 값 대신 rem 값을 추가로 생성
      mediaQuery: true, // 미디어 쿼리 내에서도 변환 적용
    }),
  ],
};
*/


//https://www.npmjs.com/package/tailwindcss-convert-px-to-rem
//https://github.com/tailwindlabs/tailwindcss/discussions/7785
//https://nekocalc.com/px-to-rem-converter
//https://www.youdad.kr/tailwind-css-essential-directives-and-functions-guide/