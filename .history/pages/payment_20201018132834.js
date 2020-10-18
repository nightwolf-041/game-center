import React from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';
import { useRouter } from 'next/router';

function Payment({ query }) {
  const router = useRouter();
  console.log(query);

  const redirectToHome = () => {
    router.replace('/');
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
      <div className={classes.paymentPageMain}>
        {query.get('result') === 'successful' ? (
          <PaymentSuccess
            redirectToHome={redirectToHome}
            trackingToken={query.get('trackingToken')}
          />
        ) : (
          <PaymentFail redirectToHome={redirectToHome} />
        )}
      </div>
    </>
  );
}

export default Payment;

Payment.getInitialProps = ({ query }) => {
  return { query };
};
