import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import BlogTopSection from '../components/blogTopSection/BlogTopSection';
import BlogPostsSection from '../components/blogPostsSection/BlogPostsSection';
import Footer from '../components/footer/Footer';
import LoginRegisterModal from '../components/loginRegisterModal/LoginRegisterModal';

export default function Blog() {
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
        <title>گیم سنتر | وبلاگ</title>
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
        blogHeader={true}
        showLoginRegisterModal={showLoginRegisterModalHandler}
      />
      <BlogTopSection />
      <BlogPostsSection />
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

// Blog.getInitialProps = async () => {
//   const res = await axios.get(
//     `http://185.211.56.9:5000/Post?guid=${slug[1]}`
//   );
//   const data = await res.data.primaryCategories;

//   return { data };
// };
