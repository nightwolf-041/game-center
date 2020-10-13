import React from 'react';
import { Controller } from 'react-hook-form';
import PanelInput from './PanelInput';
import Select from 'react-select';
import { startYears } from '../../utils/startYearsList';
import { RTLCustomStyles, customStyles } from '../../utils/reactSelectStyles';
import { daysList, monthsList, yearsList } from '../../utils/birthDayLists';
import useGetProvinces from '../../api/useGetProvinces';
import classes from './panelPage.module.css';
import PanelValidatedSelect from './PanelValidatedSelect';

function PanelTopLeftInputs({ errors, register, control }) {
  const [provinces, provincesLoading] = useGetProvinces();
  console.log(errors);
  return (
    <>
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
      <div className={classes.panelMainInputPlaceholderBox}>
        <label htmlFor="provinceSelect11">استان محل سکونت</label>
        <span>*</span>
      </div>
      {/* <Controller
        as={Select}
        name="province"
        inputId="provinceSelect11"
        instanceId="provinceSelect12"
        placeholder="انتخاب کنید"
        className={classes.RTLPanelPageSelect}
        label="استان محل سکونت"
        isLoading={provincesLoading}
        loadingMessage={() => 'درحال بارگیری...'}
        noOptionsMessage={() => 'نتیجه ای یافت نشد'}
        isRtl
        styles={RTLCustomStyles}
        options={provinces}
        control={control}
        ref={register(
          { name: 'province' },
          {
            required: 'الزامیست',
          }
        )}
      />
      {errors.province && (
        <span className={classes.panelInputValidationSpan}>
          {errors.province.message}
        </span>
      )} */}
      <PanelValidatedSelect
        selectName="province"
        styleClass={classes.RTLPanelPageSelect}
        selectLabel="استان محل سکونت"
        loading={provincesLoading}
        options={provinces}
        control={control}
        register={register(
          { name: 'province' },
          {
            required: 'الزامیست',
          }
        )}
        errors={errors.province}
      />
    </>
  );
}

export default PanelTopLeftInputs;
