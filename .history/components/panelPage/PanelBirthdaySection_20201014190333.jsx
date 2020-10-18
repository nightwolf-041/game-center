import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { customStyles } from '../../utils/reactSelectStyles';
import { daysList, monthsList, yearsList } from '../../utils/birthDayLists';
import classes from './panelPage.module.css';

function PanelBirthdaySection({ control, register, errors }) {
  const [portalTarget, setPortalTarget] = useState('');
  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  return (
    <>
      <div className={classes.panelMainInputPlaceholderBox}>
        <label>تاریخ تولد</label>
        <span>*</span>
      </div>
      <div className={classes.panelBirthdayBox}>
        <div className={panelBirthdaySelectbox}>
          <Controller
            as={Select}
            menuContainerStyle={{ zIndex: 50 }}
            menuPortalTarget={portalTarget}
            name="birthYear"
            inputId="birthYearsSelect11"
            instanceId="birthYearsSelect12"
            className={classes.panelBirthdaySelect}
            // defaultValue={yearsList[yearsList.length - 20]}
            noOptionsMessage={() => 'نتیجه ای یافت نشد'}
            styles={customStyles}
            options={yearsList}
            control={control}
            ref={register(
              { name: 'birthYear' },
              {
                required: 'الزامیست',
              }
            )}
          />
          {errors.birthYear && (
            <span className={classes.panelInputValidationSpan}>
              {errors.birthYear.message}
            </span>
          )}
        </div>
        <div className={panelBirthdaySelectbox}>
          <Controller
            as={Select}
            menuContainerStyle={{ zIndex: 50 }}
            menuPortalTarget={portalTarget}
            name="birthMouth"
            inputId="birthMouthsSelect11"
            instanceId="birthMouthsSelect12"
            className={classes.panelBirthdaySelect}
            // defaultValue={monthsList[3]}
            noOptionsMessage={() => 'نتیجه ای یافت نشد'}
            styles={customStyles}
            options={monthsList}
            control={control}
            ref={register(
              { name: 'birthMouth' },
              {
                required: 'الزامیست',
              }
            )}
          />
          {errors.birthMouth && (
            <span className={classes.panelInputValidationSpan}>
              {errors.birthMouth.message}
            </span>
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
            className={classes.panelBirthdaySelect}
            // defaultValue={daysList[daysList.length - 3]}
            noOptionsMessage={() => 'نتیجه ای یافت نشد'}
            styles={customStyles}
            options={daysList}
            control={control}
            ref={register(
              { name: 'birthDay' },
              {
                required: 'الزامیست',
              }
            )}
          />
          {errors.birthDay && (
            <span className={classes.panelInputValidationSpan}>
              {errors.birthDay.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default PanelBirthdaySection;
