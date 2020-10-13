import React from 'react';
import PanelInput from './PanelInput';

function PanelTopLeftInputs({ errors, register }) {
  console.log(errors);
  return (
    <>
      <PanelInput
        name="birthDay"
        inputID="birth-day"
        placeholderName="تاریخ تولد"
        requireInput
        centerText
        register={register}
        required="الزامیست"
        pattern={{
          value: /([0-9]{4})\/([0-9]{2})\/([0-9]{2})/,
          message: 'فرمت تاریخ صحیح نیست',
        }}
        errors={errors.birthDay}
      />

      <PanelInput
        name="phoneNumber"
        inputID="phone-number"
        placeholderName="تلفن ثابت"
        requireInput
        centerText
        register={register}
        required="الزامیست"
        pattern={{
          value: /^\d{11}$/,
          message: 'شماره تلفن باید 11 رقمی و به همراه کد استان باشد',
        }}
        errors={errors.phoneNumber}
      />
      <PanelInput
        name="startYear"
        inputID="start-year"
        placeholderName="سال شروع فعالیت"
        requireInput
        centerText
        register={register}
        required="الزامیست"
        maxLength={{
          value: 4,
          message: 'سال باید 4 رقمی باشد',
        }}
        // lengther={{
        //   value: /^(?=[0-9]{0,4}$)0*[1-9][0-9]{3,}/,
        //   message: 'سال باید عددی و شامل ۴ رقم باشد',
        // }}
        pattern={{
          value: /(13[56789]\d|13[0]\d)/,
          message: 'محدوده زمانی باید بین 1350-1400 باشد',
        }}
        errors={errors.startYear}
      />
      <PanelInput
        name="location"
        inputID="location"
        placeholderName="محل سکونت"
        requireInput
        rightToLeft
        register={register}
        required="الزامیست"
        maxLength={{
          value: 50,
          message: 'حداکثر کاراکتر های مجاز 70 است',
        }}
        errors={errors.location}
      />
    </>
  );
}

export default PanelTopLeftInputs;
