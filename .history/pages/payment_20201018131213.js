import React from 'react';

function Payment({ query }) {
  console.log(query);
  return (
    <div>
      <p>کص میخوام</p>
      <p>کص میخوام</p>
      <p>کص میخوام</p>
      <p>کص میخوام</p>
      <p>کص میخوام</p>
    </div>
  );
}

export default Payment;

Payment.getInitialProps = ({ query }) => {
  return { query };
};
