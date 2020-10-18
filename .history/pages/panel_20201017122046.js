import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PanelPage from '../components/panelPage/PanelPage';
import LoginRegisterModal from '../components/loginRegisterModal/LoginRegisterModal';

function Panel() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
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
  // useEffect(() => {
  //   if (cookies.token === null) {
  //     router.push('/');
  //     console.log(true);
  //   }
  // }, []);
  // useEffect(() => {
  //   removeCookie('token');
  // }, []);
  // removeCookie('token');
  return (
    <>
      <Head>
        <title>گیم سنتر | پنل</title>
        <meta name="description" content="وبلاگ رسمی گیم سنتر" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://amp.express.de/image/31959278/2x1/600/300/1593dd0d21ba8f433c5dbbdba00a6724/yg/zocken-symbol-30012018.jpg"
        />
        <meta property="og:title" content="وبلاگ گیم سنتر" />
        <meta
          property="og:description"
          content="با ما از بازی کردن بازی مورد علاقه خود درآمد زایی کنید"
        />
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

Panel.getInitialProps = (ctx) => {
  function getCook(name) {
    let cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split('=');
      if (name == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
  const token = getCook('token');
  // We check for ctx.res to make sure we're on the server.
  if (token === '') {
    ctx.res.writeHead(302, { Location: '/new/url' });
    ctx.res.end();
  }
  return {};
};

// Panel.getInitialProps = function ({ req }) {
//   cookie = cookies.get('token');
//   if (cookie !== null) {
//     router.replace('/');
//   }
//   return {};
// };

// export const getInitialProps = ({ req }) => {
//   cookie = cookies.get('token');
//   if (cookie !== null) {
//     router.replace('/');
//   }
// };

export default Panel;
