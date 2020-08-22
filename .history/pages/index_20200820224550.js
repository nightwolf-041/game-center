import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import TopSlider from '../components/topSlider/TopSlider';
import MakeMony from '../components/makeMony/MakeMony';
import Games from '../components/games/Games';
import Weblog from '../components/weblog/Weblog';
import ContactUs from '../components/contactUs/ContactUs';
import Footer from '../components/footer/Footer';
import Divider from '../components/divider/Divider';
import LoginRegisterModal from '../components/loginRegisterModal/LoginRegisterModal';

export default function Home() {
  let [showLoginRegisterModal, setShowLoginRegisterModal] = useState(false);

  const showLoginRegisterModalHandler = () => {
    setShowLoginRegisterModal(true);
  };
  const hideLoginRegisterModalHandler = () => {
    setShowLoginRegisterModal(false);
  };

  return (
    <>
      <Head>
        <title>گیم سنتر</title>
        <meta name="description" content="سایت رسمی گیم سنتر" />
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

      <Header
        blogHeader={false}
        showLoginRegisterModal={showLoginRegisterModalHandler}
      />
      <TopSlider />
      <MakeMony showLoginRegisterModal={showLoginRegisterModalHandler} />
      <Games />
      <Weblog />
      <Divider />
      <ContactUs />
      <Footer />

      <LoginRegisterModal
        show={showLoginRegisterModal}
        hideLoginRegisterModal={hideLoginRegisterModalHandler}
      />
    </>
  );
}
