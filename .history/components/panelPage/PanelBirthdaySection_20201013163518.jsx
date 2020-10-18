import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { customStyles } from '../../utils/reactSelectStyles';
import { daysList, monthsList, yearsList } from '../../utils/birthDayLists';
import classes from './panelPage.module.css';

function PanelBirthdaySection({ control }) {
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
    </>
  );
}

export default PanelBirthdaySection;
