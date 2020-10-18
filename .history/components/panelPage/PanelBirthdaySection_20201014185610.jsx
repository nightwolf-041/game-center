import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { customStyles } from '../../utils/reactSelectStyles';
import { daysList, monthsList, yearsList } from '../../utils/birthDayLists';
import classes from './panelPage.module.css';

function PanelBirthdaySection({ control }) {
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
        <Controller
          as={Select}
          menuContainerStyle={{ zIndex: 50 }}
          menuPortalTarget={portalTarget}
          name="birthYear"
          inputId="birthYearsSelect11"
          instanceId="birthYearsSelect12"
          className={classes.panelBirthdaySelect}
          defaultValue={yearsList[yearsList.length - 20]}
          noOptionsMessage={() => 'نتیجه ای یافت نشد'}
          styles={customStyles}
          options={yearsList}
          control={control}
          ref={register(
            { name: selectName },
            {
              required,
            }
          )}
        />
        {error && (
          <span className={classes.panelInputValidationSpan}>
            {error.message}
          </span>
        )}
        <Controller
          as={Select}
          menuContainerStyle={{ zIndex: 50 }}
          menuPortalTarget={portalTarget}
          name="birthMouth"
          inputId="birthMouthsSelect11"
          instanceId="birthMouthsSelect12"
          className={classes.panelBirthdaySelect}
          defaultValue={monthsList[3]}
          noOptionsMessage={() => 'نتیجه ای یافت نشد'}
          styles={customStyles}
          options={monthsList}
          control={control}
          ref={register(
            { name: selectName },
            {
              required,
            }
          )}
        />
        {error && (
          <span className={classes.panelInputValidationSpan}>
            {error.message}
          </span>
        )}
        <Controller
          as={Select}
          menuContainerStyle={{ zIndex: 50 }}
          menuPortalTarget={portalTarget}
          name="birthDay"
          inputId="birthDaysSelect11"
          instanceId="birthDaysSelect12"
          className={classes.panelBirthdaySelect}
          defaultValue={daysList[daysList.length - 3]}
          noOptionsMessage={() => 'نتیجه ای یافت نشد'}
          styles={customStyles}
          options={daysList}
          control={control}
          ref={register(
            { name: selectName },
            {
              required,
            }
          )}
        />
        {error && (
          <span className={classes.panelInputValidationSpan}>
            {error.message}
          </span>
        )}
      </div>
    </>
  );
}

export default PanelBirthdaySection;
