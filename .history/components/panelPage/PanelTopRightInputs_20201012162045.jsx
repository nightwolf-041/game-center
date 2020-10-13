import React from 'react';
import PanelInput from './PanelInput';

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
          value: 50,
          message: 'حداکثر کاراکتر های مجاز 70 است',
        }}
        errors={errors.location}
      />
      <PanelInput
        name="latinFamily"
        inputID="latin-family"
        placeholderName="نام خانوادگی لاتین"
        requireInput
        register={register}
        required
      />
      <PanelInput
        name="email"
        inputID="email"
        placeholderName="ایمیل"
        requireInput
        register={register}
        required
      />
      <PanelInput
        name="gender"
        inputID="gender"
        placeholderName="جنسیت"
        requireInput
        register={register}
        required
      />
      <PanelInput
        name="nickName"
        inputID="nick-name"
        placeholderName="اسم مستعار"
        requireInput
        register={register}
        required
      />
      <PanelInput
        name="activities"
        inputID="activities"
        placeholderName="حوضه فعالیت"
        requireInput
        register={register}
        required
      />
      <PanelInput
        name="identifireCode"
        inputID="identifire-code"
        placeholderName="کد معرف"
        centerText
        register={register}
        required
      />
    </>
  );
}

export default PanelTopRightInputs;
