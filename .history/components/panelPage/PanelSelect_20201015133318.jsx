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
  defaultVal,
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
        as={Select}
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
        ref={register({
          required,
        })}
        onChange={(val) => {
          console.log(val);
          setError('username', {
            type: 'manual',
            message: 'Dont Forget Your Username Should Be Cool!',
          });
        }}
        // ref={register(
        //   { name: selectName },
        //   {
        //     required,
        //   }
        // )}
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
