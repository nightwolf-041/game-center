import React from 'react';
import classes from './paymentComponents.module.css';

function PaymentSuccess({ trackingToken, redirectToHome }) {
  return (
    <div className={classes.paymentMessageBox}>
      <div className={classes.paymentMessageBoxTop}>
        <img
          src="/successImg"
          alt="success"
          className={classes.paymentMessageBoxImage}
        />
        <h2 className={classes.paymentPageResultSuccessTitle}>موفق</h2>
        <h2 className={classes.paymentPageResultSuccessSubtitle}>
          پرداخت شما با موفقیت انجام شد
        </h2>
        <div className={classes.paymentPageResultTokenLabelBox}>
          <p className={classes.paymentPageResultTokenLabel}>کد رهگیری :</p>
        </div>
        <h5 className={classes.paymentPageResultToken}>
          {trackingToken !== null ? trackingToken : 'کد رهگیری ارسال نشده'}
        </h5>
      </div>
      <button
        type="button"
        className={classes.paymentSuccessButton}
        onClick={redirectToHome}
      >
        تایید
      </button>
    </div>
  );
}

export default PaymentSuccess;
