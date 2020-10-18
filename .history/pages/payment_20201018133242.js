import React from 'react';
import Head from 'next/head';
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
        <title>گیم سنتر | وضعیت پرداخت</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.paymentPageMain}>
        {query.succeeded === true ? (
          <PaymentSuccess
            redirectToHome={redirectToHome}
            trackingToken={query.get.trackingToken}
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
