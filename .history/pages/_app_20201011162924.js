import { ToastContainer, toast } from 'react-toastify';

import '../styles/globals.css';
import 'swiper/css/swiper.min.css';
import '../styles/header.css';
import '../styles/topSlider.css';
import '../styles/makeMony.css';
import '../styles/games.css';
import '../styles/blog.css';
import '../styles/contactUs.css';
import '../styles/footer.css';

import 'react-toastify/dist/ReactToastify.css';
import 'rc-pagination/assets/index.css';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return ( <
        >
        <
        Component {...pageProps }
        /> <
        ToastContainer autoClose = { 4000 }
        position = { toast.POSITION.TOP_CENTER }
        hideProgressBar = { false }
        closeOnClick = { true }
        pauseOnVisibilityChange = { false }
        pauseOnHover = { false }
        rtl /
        >
        <
        />
    );
}

export default MyApp;