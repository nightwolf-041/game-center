import React, { useState } from 'react';
import FileUploader from '../../components/fileUploader/FileUploader';
import { useForm } from 'react-hook-form';
import PanelTopRightInputs from './PanelTopRightInputs';
import PanelTopLeftInputs from './PanelTopLeftInputs';
import classes from './panelPage.module.css';

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
              <PanelTopLeftInputs register={register} errors={errors} />
            </div>
            <div className={classes.panelMainTopRight}>
              <PanelTopRightInputs register={register} errors={errors} />
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
