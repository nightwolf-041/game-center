import React from 'react';
import PanelInput from './PanelInput';
import Select from 'react-select';
import { customStyles, startYears } from '../../utils/startYearsList';
import classes from './panelPage.module.css';

function PanelTopLeftInputs({ errors, register }) {
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
          message: 'فرمت تاریخ باید هجری و با / جدا شده باشد',
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
      <div className={classes.panelMainInputPlaceholderBox}>
        <label htmlFor="startYearsSelect11">سال شروع فعالیت</label>
        <span>*</span>
      </div>
      <Select
        inputId="startYearsSelect11"
        instanceId="startYearsSelect12"
        placeholder="سال شروع فعالیت"
        className={classes.startYearsSelect}
        defaultValue={startYears[startYears.length - 2]}
        label="سال شروع فعالیت"
        // isRtl={true}
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        styles={customStyles}
        options={startYears}
        onChange={(val) => categoriesChanger(val)}
      />
      {/* <PanelInput
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
        pattern={{
          value: /(13[56789]\d|13[0]\d)/,
          message: 'محدوده زمانی باید بین 1350-1400 باشد',
        }}
        errors={errors.startYear}
      /> */}
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
          message: 'حداکثر کاراکتر های مجاز 50 است',
        }}
        errors={errors.location}
      />
    </>
  );
}

export default PanelTopLeftInputs;
