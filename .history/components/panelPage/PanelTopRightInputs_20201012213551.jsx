import React from 'react';
import { Controller } from 'react-hook-form';
import PanelInput from './PanelInput';
import Select from 'react-select';
import {
  customStyles,
  RTLCustomStyles,
  startYears,
  genders,
} from '../../utils/startYearsList';
import classes from './panelPage.module.css';

function PanelTopRightInputs({ errors, register, control }) {
  return (
    <>
      <PanelInput
        name="latinName"
        inputID="latin-name"
        placeholderName="نام لاتین"
        requireInput
        register={register}
        required="الزامیست"
        maxLength={{
          value: 30,
          message: 'حداکثر کاراکتر های مجاز 30 است',
        }}
        pattern={{
          value: /^[a-zA-Z]+$/,
          message: 'تنها مجاز به تایپ حروف لاتین میباشید',
        }}
        errors={errors.latinName}
      />
      <PanelInput
        name="latinFamily"
        inputID="latin-family"
        placeholderName="نام خانوادگی لاتین"
        requireInput
        register={register}
        required="الزامیست"
        maxLength={{
          value: 30,
          message: 'حداکثر کاراکتر های مجاز 30 است',
        }}
        pattern={{
          value: /^[a-zA-Z]+$/,
          message: 'تنها مجاز به تایپ حروف لاتین میباشید',
        }}
        errors={errors.latinFamily}
      />
      <PanelInput
        name="email"
        inputID="email"
        placeholderName="ایمیل"
        requireInput
        register={register}
        required="الزامیست"
        maxLength={{
          value: 60,
          message: 'حداکثر کاراکتر های مجاز 60 است',
        }}
        pattern={{
          value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'فرمت ایمیل ورودی صحیح نمی باشد',
        }}
        errors={errors.email}
      />
      <div className={classes.panelMainInputPlaceholderBox}>
        <label htmlFor="genderSelect11">جنسیت</label>
        <span>*</span>
      </div>
      <Controller
        as={Select}
        name="gender"
        inputId="genderSelect11"
        instanceId="genderSelect12"
        placeholder="جنسیت"
        className={classes.RTLPanelPageSelect}
        defaultValue={genders[0]}
        label="جنسیت"
        isRtl={true}
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        styles={RTLCustomStyles}
        options={genders}
        control={control}
      />
      <PanelInput
        name="nickName"
        inputID="nick-name"
        placeholderName="اسم مستعار"
        requireInput
        register={register}
        required="الزامیست"
        maxLength={{
          value: 30,
          message: 'حداکثر کاراکتر های مجاز 30 است',
        }}
        pattern={{
          value: /^[a-zA-Z0-9$@#-_]+$/,
          message: 'تنها حروف لاتین، اعداد و (@ $ # - _) قابل استفاده هستند',
        }}
        errors={errors.nickName}
      />
      <div className={classes.panelMainInputPlaceholderBox}>
        <label htmlFor="activitiesSelect11">حوضه فعالیت</label>
        <span>*</span>
      </div>
      <Controller
        as={Select}
        name="activities"
        inputId="activitiesSelect11"
        instanceId="activitiesSelect12"
        placeholder="حوضه فعالیت"
        label="حوضه فعالیت"
        className={classes.panelPageSelect}
        closeMenuOnSelect={false}
        styles={customStyles}
        options={startYears}
        defaultValue={[startYears[4], startYears[5]]}
        isMulti
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        control={control}
      />
      <PanelInput
        name="identifireCode"
        inputID="identifire-code"
        placeholderName="کد معرف"
        centerText
        register={register}
      />
    </>
  );
}

export default PanelTopRightInputs;
