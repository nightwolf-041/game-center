import React from 'react';
import PanelInput from './PanelInput';
import { genders } from '../../utils/startYearsList';
import { RTLCustomStyles } from '../../utils/reactSelectStyles';
import useGetActivitiesList from '../../api/useGetActivitiesList';
import PanelSelect from './PanelSelect';
import classes from './panelPage.module.css';

function PanelTopRightInputs({ setError, errors, register, control }) {
  const [activities, activitiesLoading] = useGetActivitiesList();
  return (
    <>
      <PanelInput
        name="persianName"
        inputID="persian-name"
        placeholderName="نام فارسی"
        requireInput
        rightToLeft
        register={register}
        required="الزامیست"
        maxLength={{
          value: 30,
          message: 'حداکثر کاراکتر های مجاز 30 است',
        }}
        pattern={{
          value: /^[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]+$/,
          message: 'تنها مجاز به تایپ حروف فارسی می باشید',
        }}
        errors={errors.persianName}
      />
      <PanelInput
        name="persianFamily"
        inputID="persian-Family"
        placeholderName="نام خانوادگی فارسی"
        requireInput
        rightToLeft
        register={register}
        required="الزامیست"
        maxLength={{
          value: 30,
          message: 'حداکثر کاراکتر های مجاز 30 است',
        }}
        pattern={{
          value: /^[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]+$/,
          message: 'تنها مجاز به تایپ حروف فارسی می باشید',
        }}
        errors={errors.persianFamily}
      />
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
      {/* <PanelSelect
        rtlState={true}
        selectName="gender"
        styleClass={classes.RTLPanelPageSelect}
        customStyles={RTLCustomStyles}
        selectLabel="جنسیت"
        options={genders}
        // defaultVal={genders[0]}
        control={control}
        register={register}
        required="الزامیست"
        error={errors.gender}
      /> */}
      <PanelSelect
        rtlState={true}
        selectName="gender"
        styleClass={classes.RTLPanelPageSelect}
        customStyles={RTLCustomStyles}
        selectLabel="جنسیت"
        options={genders}
        // defaultVal={data.gender}
        control={control}
        register={register}
        required="الزامیست"
        error={errors.gender}
        setError={setError}
        ref={register({
          required: true,
        })}
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
      <PanelSelect
        rtlState={true}
        selectName="activities"
        styleClass={classes.RTLPanelPageSelect}
        customStyles={RTLCustomStyles}
        selectLabel="حوضه فعالیت"
        loading={activitiesLoading}
        options={activities}
        control={control}
        register={register}
        required="الزامیست"
        error={errors.activities}
      />
    </>
  );
}

export default PanelTopRightInputs;
