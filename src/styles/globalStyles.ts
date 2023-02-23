import { CSSProperties } from 'react';
// import localFont from '@next/font/local'

// const righteous = localFont({
//    src: './fonts/Righteous/Righteous-Regular.ttf'
// })

// export interface GlobalStyle {
//   html: CSSProperties;
//   body: CSSProperties;
// }

// export const globalStyles: GlobalStyle = {
//   html: {
//     height: '100%'
//   },
//   body: {
//     margin: 0,
//     padding: 0,
//     height: '100%',
//   },
 
// };

// Couldn't get this to work properly. But thought to keep it for later sorting. 
// Function to use this code in _app.tsx
// function toCSS(obj: CSSProperties) {
//     return Object.entries(obj)
//       .map(([prop, value]) => {
//         if (typeof value === 'string') {
//           return `${prop}:${value};`
//         } else if (typeof value?.default === 'string') {
//           return `${prop}:url(${value.default});`
//         }
//         return ''
//       })
//       .join('');
//   }
// import globalStyles from '@/styles/globalStyles';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <style jsx global>
//         {`
//           html,
//           body {
//             height: 100%;
//           }

//           body {
//             ${Object.entries(globalStyles.body)
//               .map(([prop, value]) => `${prop}:${value};`)
//               .join('')}
//           }
//         `}
//       </style>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;