import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import cookie from 'cookie';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PanelPage from '../components/panelPage/PanelPage';
import LoginRegisterModal from '../components/loginRegisterModal/LoginRegisterModal';

function Panel({ cookiesObject }) {
  console.log(cookiesObject);
  let [showLoginRegisterModal, setShowLoginRegisterModal] = useState(false);
  let [registerSuccessModal, showRegisterSuccessModal] = useState(false);

  const showLoginRegisterModalHandler = () => {
    setShowLoginRegisterModal(true);
  };
  const hideLoginRegisterModalHandler = () => {
    setShowLoginRegisterModal(false);
    showRegisterSuccessModal(false);
  };

  const showRegisterSuccessModalHandler = () => {
    showRegisterSuccessModal(true);
  };
  const hideRegisterSuccessModalHandler = () => {
    showRegisterSuccessModal(false);
    setShowLoginRegisterModal(false);
  };

  return (
    <>
      <Head>
        <title>گیم سنتر | پنل</title>
        <meta name="description" content="پنل مشتری گیم سنتر" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        panelHeader={true}
        showLoginRegisterModal={showLoginRegisterModalHandler}
      />
      <PanelPage />
      <Footer blogHeader={true} />
      <LoginRegisterModal
        show={showLoginRegisterModal}
        showSuccess={registerSuccessModal}
        hideLoginRegisterModal={hideLoginRegisterModalHandler}
        showSuccessModalHandler={showRegisterSuccessModalHandler}
        hideSuccessModalHandler={hideRegisterSuccessModalHandler}
      />
    </>
  );
}

export default Panel;

export async function getServerSideProps({ req, res }) {
  const cookies = req.headers.cookie;
  const cookiesObject = cookie.parse(cookies);
  if (cookiesObject === null) {
    res.writeHead(302, { Location: '/' });
    res.end();
  }
  return { props: { cookiesObject } };
}
