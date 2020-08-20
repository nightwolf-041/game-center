import Head from 'next/head';
import Header from '../components/header/Header';
import TopSlider from '../components/topSlider/TopSlider';
import MakeMony from '../components/makeMony/MakeMony';
import Games from '../components/games/Games';
import Blog from '../components/blog/Blog';
import ContactUs from '../components/contactUs/ContactUs';
import Footer from '../components/footer/Footer';
import RegisterModal from '../components/registerModal/RegisterModal';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>گیم سنتر</title>
        <meta name="description" content="سایت رسمی پیشه پلاس" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://amp.express.de/image/31959278/2x1/600/300/1593dd0d21ba8f433c5dbbdba00a6724/yg/zocken-symbol-30012018.jpg"
        />
        <meta property="og:title" content="سایت گیم سنتر" />
        <meta
          property="og:description"
          content="با ما از بازی کردن بازی مورد علاقه خود درآمد زایی کنید"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <TopSlider />
      <MakeMony />
      <Games />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
}
