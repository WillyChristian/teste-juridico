import React from 'react';
import '../styles/tailwind.css';

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp