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
    register({ name: 'birthYear' }, { requied: true });
  }, []);

  return (
    <>
      <div className={classes.panelMainInputPlaceholderBox}>
        <label>تاریخ تولد</label>
        <span>*</span>
      </div>
      <div className={classes.panelBirthdayBox}>
        <div className={classes.panelBirthdaySelectbox}>
          {/* <Controller
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
            ref={register({
              required: 'الزامیست',
            })}
          /> */}
          <Controller
            control={control}
            name="birthYear"
            render={({ onChange, onBlur, value, name }) => {
              return (
                <Select
                  ref={register({ required: true })}
                  name={name}
                  value={value}
                  error={errors.birthYear && errors.birthYear.message}
                  onChange={(e) =>
                    onChange(
                      setError(selectName, {
                        type: 'required',
                        message: 'خالی نزارش',
                      })
                    )
                  }
                  onClear={() => onChange([])}
                  onBlur={onBlur}
                  items={yearsList || []}
                  className={classes.panelBirthdaySelect}
                />
              );
            }}
          />
          {errors.birthYear && (
            <span className={classes.panelInputValidationSpan}>
              {errors.birthYear.message}
            </span>
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
            // defaultValue={monthsList[3]}
            noOptionsMessage={() => 'نتیجه ای یافت نشد'}
            styles={customStyles}
            options={monthsList}
            control={control}
            defaultValue=""
            // ref={register(
            //   { name: 'birthMouth' },
            //   {
            //     required: 'الزامیست',
            //   }
            // )}
            ref={register({
              required: 'الزامیست',
            })}
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
            placeholder="روز"
            className={classes.panelBirthdaySelect}
            // defaultValue={daysList[daysList.length - 3]}
            noOptionsMessage={() => 'نتیجه ای یافت نشد'}
            styles={customStyles}
            options={daysList}
            defaultValue={true}
            control={control}
            defaultValue=""
            ref={register({
              required: 'الزامیست',
            })}
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
