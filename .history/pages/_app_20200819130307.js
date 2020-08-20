import '../styles/globals.css';
import 'swiper/css/swiper.min.css';
import '../styles/header.css';
import '../styles/topSlider.css';
import '../styles/makeMony.css';
import '../styles/games.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
