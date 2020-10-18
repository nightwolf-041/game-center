import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import classes from './panelPage.module.css';

function PanelValidatedSelect({
  rtlState,
  selectName,
  styleClass,
  customStyles,
  selectLabel,
  loading,
  options,
  // defaultVal,
  setError,
  control,
  register,
  error,
  required,
}) {
  const [portalTarget, setPortalTarget] = useState('');
  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  return (
    <>
      <div className={classes.panelMainInputPlaceholderBox}>
        <label htmlFor={`${selectName}Select11`}>{selectLabel}</label>
        <span>*</span>
      </div>
      <Controller
        as={
          <Select
            // onChange={(val) => {
            //   console.log(val);
            //   setError(selectName, 'required', 'empty!');
            // }}
            onChange={(e) => {
              setError(
                selectName,
                'notMatch',
                'please choose a different username'
              );
            }}
            ref={register({ required: true })}
          />
        }
        menuContainerStyle={{ zIndex: 50 }}
        menuPortalTarget={portalTarget}
        name={selectName}
        inputId={`${selectName}Select11`}
        instanceId={`${selectName}Select12`}
        placeholder="انتخاب کنید"
        className={styleClass}
        label={selectLabel}
        isLoading={loading}
        loadingMessage={() => 'درحال بارگیری...'}
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        isRtl={rtlState}
        styles={customStyles}
        options={options}
        defaultValue={true}
        control={control}
        // ref={register}
        ref={register}
        // rules={{
        //   required: true,
        // }}
        // onChange={(val) => {
        //   console.log(val);
        //   setError(selectName, 'required', 'empty!');
        // }}
        // rules={{ required: true }}
      />
      {error && (
        <span className={classes.panelInputValidationSpan}>
          {error.message}
        </span>
      )}
    </>
  );
}

export default PanelValidatedSelect;
