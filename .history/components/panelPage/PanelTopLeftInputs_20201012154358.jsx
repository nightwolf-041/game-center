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
        // ref={register({
        //   validate: {
        //     positiveNumber: (value) => parseFloat(value) > 0,
        //     lessThanHundred: (value) => parseFloat(value) < 200,
        //   },
        // })}
        validate={{
          test: (value) => /^\d{4}$/.test(value) && 'باید 4 رقمی باشد',
          test1: (value) => /(?:(?:13|13)[5-9]{1})/.test(value) && 'صحیح نیست',
        }}
        // pattern={{
        //   value: /(?:(?:13|13)[5-9]{1})/,
        //   message: 'محدوده زمانی معتبر نیست',
        // }}
        // pattern={{
        //   value: /^\d{4}$/,
        //   message: 'سال شروع باید عددی و شامل ۴ رقم باشد',
        // }}
        errors={errors.startYear}
      />
      <PanelInput
        name="location"
        inputID="location"
        placeholderName="محل سکونت"
        requireInput
        rightToLeft
        register={register}
        required
      />
    </>
  );
}

export default PanelTopLeftInputs;
