import React from 'react';
import PanelInput from './PanelInput';
import Select from 'react-select';
import { customStyles, startYears } from '../../utils/startYearsList';
import classes from './panelPage.module.css';

function PanelTopRightInputs({ errors, register }) {
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
      <PanelInput
        name="gender"
        inputID="gender"
        placeholderName="جنسیت"
        requireInput
        register={register}
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
      {/* <PanelInput
        name="activities"
        inputID="activities"
        placeholderName="حوضه فعالیت"
        requireInput
        register={register}
        required
      /> */}
      <Select
        closeMenuOnSelect={false}
        components={{ ClearIndicator }}
        styles={customStyles}
        defaultValue={[startYears[4], startYears[5]]}
        isMulti
        options={startYears}
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
