import React from 'react';
import classes from './panelPage.module.css';

function PanelPageBottomInputs({ errors, register }) {
  return (
    <>
      <div className={classes.panelTextAreaBox}>
        <div className={classes.panelTextareaLabelBox}>
          <label htmlFor="addressTextarea">نشانی</label>
        </div>
        <textarea
          name="address"
          id="addressTextarea"
          className={classes.panelTextArea}
          ref={register({
            maxLength: {
              value: 100,
              message: 'حداکثر کاراکتر های مجاز 100 است',
            },
          })}
        ></textarea>
        {errors && (
          <span className={classes.panelInputValidationSpan}>
            {errors.message}
          </span>
        )}
      </div>
      <div className={classes.panelTextAreaBox}>
        <div className={classes.panelTextareaLabelBox}>
          <label htmlFor="descriptionTextarea">توضیحات</label>
        </div>
        <textarea
          name="description"
          id="descriptionTextarea"
          className={classes.panelTextArea}
          ref={register({
            maxLength: {
              value: 150,
              message: 'حداکثر کاراکتر های مجاز 150 است',
            },
          })}
        ></textarea>
      </div>
      <div className={classes.panelMainSubmitBox}>
        <input
          type="submit"
          value="ثبت اطلاعات"
          className={classes.panelMainSubmitButton}
        />
      </div>
    </>
  );
}

export default PanelPageBottomInputs;
