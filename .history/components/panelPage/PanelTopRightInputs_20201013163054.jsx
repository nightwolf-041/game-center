import React from 'react';
import { Controller } from 'react-hook-form';
import PanelInput from './PanelInput';
import Select from 'react-select';
import { startYears, genders } from '../../utils/startYearsList';
import { customStyles, RTLCustomStyles } from '../../utils/reactSelectStyles';
import useGetActivitiesList from '../../api/useGetActivitiesList';
import classes from './panelPage.module.css';
import PanelTopLeftInputs from './PanelTopLeftInputs';
import PanelSelect from './PanelSelect';

function PanelTopRightInputs({ errors, register, control }) {
  const [activities, activitiesLoading] = useGetActivitiesList();
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
      <PanelSelect
        rtlState={true}
        selectName="gender"
        styleClass={classes.RTLPanelPageSelect}
        customStyles={RTLCustomStyles}
        selectLabel="جنسیت"
        options={genders}
        defaultValue={genders[0]}
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
      <PanelValidatedSelect
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