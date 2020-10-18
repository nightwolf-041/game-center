import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import classes from './panelPage.module.css';

// const [portalTarget, setPortalTarget] = useState('');
//   useEffect(() => {
//     setPortalTarget(document.body);
//   }, []);

const PanelValidatedSelect = ({
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
  validate,
}) => {
  const [portalTarget, setPortalTarget] = useState('');
  useEffect(() => {
    setPortalTarget(document.body);
    register(selectName);
  }, []);

  const [values, setReactSelect] = useState({
    selectedOption: [],
  });

  const handleMultiChange = (selectedOption) => {
    setValue('reactSelect', selectedOption);
    setReactSelect({ selectedOption });
  };

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
        defaultValue=""
        control={control}
        // ref={register}
        isClearable
        ref={register}
      />
      {error && <p>هوشششششششششهههه</p>}
      {/* <Controller
        as={
          <Select
            onInputChange={(e) => {
              setError(selectName, {
                type: 'required',
                message: 'خالی نزارش',
              });
            }}
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
        defaultValue=""
        control={control}
        // ref={register}
        ref={register({ name: selectName }, { required })}
        // ref={register({ required: true })}
      />
      {error && (
        <span className={classes.panelInputValidationSpan}>
          {error.message}
        </span>
      )} */}
    </>
  );
};

export default PanelValidatedSelect;
