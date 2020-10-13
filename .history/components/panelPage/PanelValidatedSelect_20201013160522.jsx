import React from 'react';

function PanelValidatedSelect() {
  return (
    <>
      <div className={classes.panelMainInputPlaceholderBox}>
        <label htmlFor="provinceSelect11">استان محل سکونت</label>
        <span>*</span>
      </div>
      <Controller
        as={Select}
        name="province"
        inputId="provinceSelect11"
        instanceId="provinceSelect12"
        placeholder="انتخاب کنید"
        className={classes.RTLPanelPageSelect}
        label="استان محل سکونت"
        isLoading={provincesLoading}
        loadingMessage={() => 'درحال بارگیری...'}
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        isRtl
        styles={RTLCustomStyles}
        options={provinces}
        control={control}
        ref={register(
          { name: 'province' },
          {
            required: 'الزامیست',
          }
        )}
      />
      {errors.province && (
        <span className={classes.panelInputValidationSpan}>
          {errors.province.message}
        </span>
      )}
    </>
  );
}

export default PanelValidatedSelect;
