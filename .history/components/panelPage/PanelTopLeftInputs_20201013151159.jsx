import React from 'react';
import { Controller } from 'react-hook-form';
import PanelInput from './PanelInput';
import Select from 'react-select';
import { startYears } from '../../utils/startYearsList';
import { customStyles } from '../../utils/reactSelectStyles';
import { daysList, monthsList, yearsList } from '../../utils/birthDayLists';
import useGetProvinces from '../../api/useGetProvinces';
import classes from './panelPage.module.css';

function PanelTopLeftInputs({ errors, register, control }) {
  const [provinces, provincesLoading] = useGetProvinces();
  console.log(errors);
  return (
    <>
      {/* <PanelInput
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
      /> */}
      <div className={classes.panelMainInputPlaceholderBox}>
        <label>تاریخ تولد</label>
        <span>*</span>
      </div>
      <div className={classes.panelBirthdayBox}>
        <Controller
          as={Select}
          name="birthYear"
          inputId="birthYearsSelect11"
          instanceId="birthYearsSelect12"
          className={classes.panelBirthdaySelect}
          defaultValue={yearsList[yearsList.length - 20]}
          noOptionsMessage={() => 'نتیجه ای یافت نشد'}
          styles={customStyles}
          options={yearsList}
          control={control}
        />
        <Controller
          as={Select}
          name="birthMouth"
          inputId="birthMouthsSelect11"
          instanceId="birthMouthsSelect12"
          className={classes.panelBirthdaySelect}
          defaultValue={monthsList[3]}
          noOptionsMessage={() => 'نتیجه ای یافت نشد'}
          styles={customStyles}
          options={monthsList}
          control={control}
        />
        <Controller
          as={Select}
          name="birthDay"
          inputId="birthDaysSelect11"
          instanceId="birthDaysSelect12"
          className={classes.panelBirthdaySelect}
          defaultValue={daysList[daysList.length - 3]}
          noOptionsMessage={() => 'نتیجه ای یافت نشد'}
          styles={customStyles}
          options={daysList}
          control={control}
        />
      </div>

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
      <Controller
        as={Select}
        name="startYear"
        inputId="startYearsSelect11"
        instanceId="startYearsSelect12"
        placeholder="سال شروع فعالیت"
        className={classes.panelPageSelect}
        defaultValue={startYears[startYears.length - 2]}
        label="سال شروع فعالیت"
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        styles={customStyles}
        options={startYears}
        control={control}
      />
      {/* <PanelInput
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
      /> */}
      <div className={classes.panelMainInputPlaceholderBox}>
        <label htmlFor="provinceSelect11">محل سکونت</label>
        <span>*</span>
      </div>
      {/* {!provincesLoading && ( */}
      <Select
        // as={Select}
        name="province"
        inputId="provinceSelect11"
        instanceId="provinceSelect12"
        placeholder="محل سکونت"
        className={classes.panelPageSelect}
        // defaultValue={provinces[3]}
        label="محل سکونت"
        isLoading={provincesLoading}
        loadingMessage={() => 'درحال بارگیری...'}
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        isRtl
        styles={customStyles}
        options={provinces}
        getOptionLabel={(option) => `${option.name}`}
        getOptionValue={(option) => `${option.provinceGuid}`}
        control={control}
        // ref={(e) => register({ required: true, name: 'province' })}
        ref={() =>
          register(
            { required: true, message: ';dddd' }
          )
        }
      />
      {/* )} */}
      {errors.province && (
        <span className={classes.panelInputValidationSpan}>
          {errors.province.message}
        </span>
      )}
    </>
  );
}

export default PanelTopLeftInputs;
