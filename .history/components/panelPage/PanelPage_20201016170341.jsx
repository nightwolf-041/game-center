import React, { useState, useEffect } from 'react';
import FileUploader from '../../components/fileUploader/FileUploader';
import { useForm } from 'react-hook-form';
import useGetUserInfo from '../../api/useGetUserInfo';
import PanelTopRightInputs from './PanelTopRightInputs';
import PanelTopLeftInputs from './PanelTopLeftInputs';
import classes from './panelPage.module.css';
import PanelPageBottomInputs from './PanelPageBottomInputs';
import useUpdateUserInfo from '../../api/useUpdateUserInfo';
import PageLoader from '../UI/pageLoader/PageLoader';

function PanelPage() {
  const [uploader, setUploader] = useState({
    file: [],
    documentGuid: '',
  });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    control,
    errors,
    formState,
  } = useForm();
  const [userInfo, userInfoLoading, getUserInfo] = useGetUserInfo();
  const [updateLoading, updateUserInfo] = useUpdateUserInfo();

  useEffect(() => {
    getUserInfo(reset, uploader, setUploader);
  }, []);

  // console.log(formState.isValid);

  const onSubmit = (data) => {
    console.log(data);
    // updateUserInfo(data, uploader);
  };

  return (
    <div className={classes.panelPageMain}>
      <PageLoader loading={userInfoLoading || updateLoading} />
      <div className={classes.panelPageMainBackdrop}></div>
      <div className={classes.panelPageTitleBox}>
        <h1 className={classes.panelPageTitle}>تکمیل اطلاعات شخصی</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.panelMainTop}>
            <div className={classes.panelMainTopRight}>
              <PanelTopRightInputs
                register={register}
                errors={errors}
                control={control}
              />
            </div>
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
              <PanelTopLeftInputs
                register={register}
                errors={errors}
                control={control}
              />
            </div>
          </div>
          <div className={classes.panelMainBottom}>
            <PanelPageBottomInputs
              register={register}
              errors={errors}
              disableState={userInfoLoading || updateLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PanelPage;
