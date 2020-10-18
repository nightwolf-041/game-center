import React from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';

function Payment({ query }) {
  console.log(query);
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
    </>
  );
}

export default Payment;

Payment.getInitialProps = ({ query }) => {
  return { query };
};
