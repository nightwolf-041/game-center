import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { customStyles } from '../../utils/reactSelectStyles';
import { daysList, monthsList, yearsList } from '../../utils/birthDayLists';
import classes from './panelPage.module.css';

function PanelBirthdaySection({
  control,
  setValue,
  setError,
  register,
  errors,
}) {
  const [portalTarget, setPortalTarget] = useState('');
  useEffect(() => {
    setPortalTarget(document.body);
    register({ name: 'birthYear' });
    register({ name: 'birthMouth' });
    register({ name: 'birthDay' });
  }, []);

  return (
    <>
      <div className={classes.panelMainInputPlaceholderBox}>
        <label>تاریخ تولد</label>
        <span>*</span>
      </div>
      <div className={classes.panelBirthdayBox}>
        <div className={classes.panelBirthdaySelectbox}>
          <Controller
            as={Select}
            menuContainerStyle={{ zIndex: 50 }}
            menuPortalTarget={portalTarget}
            name="birthYear"
            inputId="birthYearsSelect11"
            instanceId="birthYearsSelect12"
            placeholder="سال"
            className={classes.panelBirthdaySelect}
            noOptionsMessage={() => 'نتیجه ای یافت نشد'}
            styles={customStyles}
            options={yearsList}
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
          />
          {errors.birthYear && (
            <span className={classes.panelInputValidationSpan}>الزامیست</span>
          )}
        </div>
        <div className={classes.panelBirthdaySelectbox}>
          <Controller
            as={Select}
            menuContainerStyle={{ zIndex: 50 }}
            menuPortalTarget={portalTarget}
            name="birthMouth"
            inputId="birthMouthsSelect11"
            instanceId="birthMouthsSelect12"
            placeholder="ماه"
            className={classes.panelBirthdaySelect}
            noOptionsMessage={() => 'نتیجه ای یافت نشد'}
            styles={customStyles}
            options={monthsList}
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
          />
          {errors.birthMouth && (
            <span className={classes.panelInputValidationSpan}>الزامیست</span>
          )}
        </div>
        <div className={classes.panelBirthdaySelectbox}>
          <Controller
            as={Select}
            menuContainerStyle={{ zIndex: 50 }}
            menuPortalTarget={portalTarget}
            name="birthDay"
            inputId="birthDaysSelect11"
            instanceId="birthDaysSelect12"
            placeholder="روز"
            className={classes.panelBirthdaySelect}
            noOptionsMessage={() => 'نتیجه ای یافت نشد'}
            styles={customStyles}
            options={daysList}
            defaultValue={true}
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
          />
          {errors.birthDay && (
            <span className={classes.panelInputValidationSpan}>الزامیست</span>
          )}
        </div>
      </div>
    </>
  );
}

export default PanelBirthdaySection;
