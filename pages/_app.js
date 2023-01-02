// import '../styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import React from 'react';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return(
    < Component {...pageProps} />
  )
   
}

export default MyApp
