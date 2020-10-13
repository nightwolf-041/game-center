import React from 'react';
import PanelInput from './PanelInput';

function PanelTopLeftInputs({ register }) {
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
          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: 'صحیح نیست',
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
        required
      />
      <PanelInput
        name="startYear"
        inputID="start-year"
        placeholderName="سال شروع فعالیت"
        requireInput
        centerText
        // refrence={register({ required })}
        register={register}
        required
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
