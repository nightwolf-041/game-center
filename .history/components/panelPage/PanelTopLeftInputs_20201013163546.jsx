import React from 'react';
import PanelInput from './PanelInput';
import { startYears } from '../../utils/startYearsList';
import { RTLCustomStyles, customStyles } from '../../utils/reactSelectStyles';
import PanelValidatedSelect from './PanelValidatedSelect';
import PanelSelect from './PanelSelect';
import useGetProvinces from '../../api/useGetProvinces';
import classes from './panelPage.module.css';
import PanelBirthdaySection from './PanelBirthdaySection';

function PanelTopLeftInputs({ errors, register, control }) {
  const [provinces, provincesLoading] = useGetProvinces();
  return (
    <>
      <PanelBirthdaySection control={control} />
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
      <PanelSelect
        rtlState={false}
        selectName="startYear"
        styleClass={classes.panelPageSelect}
        customStyles={customStyles}
        selectLabel="سال شروع فعالیت"
        options={startYears}
        defaultVal={startYears[startYears.length - 2]}
        control={control}
      />
      <PanelValidatedSelect
        selectName="province"
        styleClass={classes.RTLPanelPageSelect}
        customStyles={RTLCustomStyles}
        selectLabel="استان محل سکونت"
        loading={provincesLoading}
        options={provinces}
        control={control}
        register={register}
        required="الزامیست"
        error={errors.province}
      />
    </>
  );
}

export default PanelTopLeftInputs;
