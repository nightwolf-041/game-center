import React from 'react';

function PanelValidatedSelect({
  selectName,
  styleClass,
  selectLabel,
  loading,
  options,
  control,
  register,
  errors,
}) {
  return (
    <>
      <div className={classes.panelMainInputPlaceholderBox}>
        <label htmlFor={`${selectName}Select11`}>{selectLabel}</label>
        <span>*</span>
      </div>
      <Controller
        as={Select}
        name={selectName}
        inputId={`${selectName}Select11`}
        instanceId={`${selectName}Select12`}
        placeholder="انتخاب کنید"
        className={styleClass}
        label={selectLabel}
        isLoading={loading}
        loadingMessage={() => 'درحال بارگیری...'}
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        isRtl
        styles={RTLCustomStyles}
        options={options}
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
