import React from 'react';
import classes from './paymentComponents.module.css';

function PaumentFail({ redirectToHome }) {
  return (
    <div className={classes.paymentMessageBox}>
      <div className={classes.paymentMessageBoxTop}>
        <img
          src="/fail-img.png"
          alt="fail"
          className={classes.paymentMessageBoxImage}
        />
        <h2 className={classes.paymentPageResultFailTitle}>نا موفق!</h2>
        <h2 className={classes.paymentPageResultFailSubtitle}>
          متاسفانه پرداخت با مشکل مواجه شده
        </h2>
      </div>
      <button
        type="button"
        className={classes.paymentFailButton}
        onClick={redirectToHome}
      >
        قبول
      </button>
    </div>
  );
}

export default PaumentFail;
