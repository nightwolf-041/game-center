import React from 'react';

function PanelSelect({
  rtlState,
  selectName,
  styleClass,
  customStyles,
  selectLabel,
  options,
  control,
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
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        isRtl={rtlState}
        styles={customStyles}
        options={options}
        control={control}
      />
    </>
  );
}

export default PanelSelect;