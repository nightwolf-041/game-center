import React, { useState } from 'react';
import PanelInput from './PanelInput';
import FileUploader from '../../components/fileUploader/FileUploader';
import classes from './panelPage.module.css';
import { useForm } from 'react-hook-form';
import PanelTopRightInputs from './PanelTopRightInputs';
import PanelTopLeftInputs from './PanelTopLeftInputs';

function PanelPage() {
  const [uploader, setUploader] = useState({
    file: [],
    documentGuid: '',
  });

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={classes.panelPageMain}>
      <div className={classes.panelPageMainBackdrop}></div>
      <div className={classes.panelPageTitleBox}>
        <h1 className={classes.panelPageTitle}>تکمیل اطلاعات شخصی</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.panelMainTop}>
            <div className={classes.panelMainTopLeft}>
              <FileUploader
                customConfig={{
                  files: uploader.file,
                  imageValidateSizeMinWidth: 300,
                  imageValidateSizeMaxWidth: 750,
                  imageValidateSizeMinHeight: 300,
                  imageValidateSizeMaxHeight: 750,
                  onprocessfile: (error, file) => {
                    console.log(file.serverId);
                    setUploader((prevUploader) => ({
                      ...prevUploader,
                      documentGuid: JSON.parse(file.serverId).documentGuid,
                    }));
                  },
                  onupdatefiles: (fileItems) => {
                    console.log(fileItems.file);
                    setUploader((prevUploader) => ({
                      ...prevUploader,
                      file: fileItems.map((fileItem) => fileItem.file),
                    }));
                  },
                }}
              />
              {/* <PanelInput
                name="birthDay"
                inputID="birth-day"
                placeholderName="تاریخ تولد"
                requireInput
                centerText
                register={register}
                required="الزامیست"
                pattern={{
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'صحیح نیست',
                }}
                errors={errors.birthDay}
              />

              <PanelInput
                name="phoneNumber"
                inputID="phone-number"
                placeholderName="تلفن ثابت"
                requireInput
                centerText
                register={register}
                required
              />
              <PanelInput
                name="startYear"
                inputID="start-year"
                placeholderName="سال شروع فعالیت"
                requireInput
                centerText
                // refrence={register({ required })}
                register={register}
                required
              />
              <PanelInput
                name="location"
                inputID="location"
                placeholderName="محل سکونت"
                requireInput
                rightToLeft
                register={register}
                required
              /> */}
              <PanelTopLeftInputs register={register} errors={errors} />
            </div>
            <div className={classes.panelMainTopRight}>
              {/* <PanelInput
                name="latinName"
                inputID="latin-name"
                placeholderName="نام لاتین"
                requireInput
                register={register}
                required
              />
              <PanelInput
                name="latinFamily"
                inputID="latin-family"
                placeholderName="نام خانوادگی لاتین"
                requireInput
                register={register}
                required
              />
              <PanelInput
                name="email"
                inputID="email"
                placeholderName="ایمیل"
                requireInput
                register={register}
                required
              />
              <PanelInput
                name="gender"
                inputID="gender"
                placeholderName="جنسیت"
                requireInput
                register={register}
                required
              />
              <PanelInput
                name="nickName"
                inputID="nick-name"
                placeholderName="اسم مستعار"
                requireInput
                register={register}
                required
              />
              <PanelInput
                name="activities"
                inputID="activities"
                placeholderName="حوضه فعالیت"
                requireInput
                register={register}
                required
              />
              <PanelInput
                name="identifireCode"
                inputID="identifire-code"
                placeholderName="کد معرف"
                centerText
                register={register}
                required
              /> */}
              <PanelTopRightInputs register={register} />
            </div>
          </div>
          <div className={classes.panelMainBottom}>
            <div className={classes.panelTextAreaBox}>
              <div className={classes.panelTextareaLabelBox}>
                <label htmlFor="addressTextarea">نشانی</label>
              </div>
              <textarea
                name="address"
                id="addressTextarea"
                className={classes.panelTextArea}
                ref={register}
              ></textarea>
            </div>
            <div className={classes.panelTextAreaBox}>
              <div className={classes.panelTextareaLabelBox}>
                <label htmlFor="descriptionTextarea">توضیحات</label>
              </div>
              <textarea
                name="description"
                id="descriptionTextarea"
                className={classes.panelTextArea}
                ref={register}
              ></textarea>
            </div>
            <div className={classes.panelMainSubmitBox}>
              <input
                type="submit"
                value="ثبت اطلاعات"
                className={classes.panelMainSubmitButton}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PanelPage;
