import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/router';
// import { useCookies } from 'react-cookie';
import useGetUserInfo from '../../api/useGetUserInfo';
import PanelTopRightInputs from './PanelTopRightInputs';
import PanelTopLeftInputs from './PanelTopLeftInputs';
import PanelPageBottomInputs from './PanelPageBottomInputs';
import useUpdateUserInfo from '../../api/useUpdateUserInfo';
import usePayment from '../../api/usePayment';
import FileUploader from '../../components/fileUploader/FileUploader';
import PageLoader from '../UI/pageLoader/PageLoader';
import { toast } from 'react-toastify';
import classes from './panelPage.module.css';

function PanelPage() {
  const [uploader, setUploader] = useState({
    file: [],
    documentGuid: '',
  });
  const { register, handleSubmit, reset, control, errors } = useForm();
  const [userInfo, userInfoLoading, getUserInfo] = useGetUserInfo();
  const [updateLoading, updateUserInfo] = useUpdateUserInfo();
  const [paymentLoading, paymentHandler] = usePayment();

  useEffect(() => {
    getUserInfo(reset, uploader, setUploader);
  }, []);

  useEffect(() => {
    if (!userInfoLoading) {
      toast(`وضعیت : ${userInfo.accountState}`, { type: toast.TYPE.INFO });
    }
  }, [userInfoLoading]);

  useEffect(() => {
    if (Object.keys(errors).length !== 0 && errors.constructor === Object) {
      toast('لطفا ورودی های الزامی را پر کنید', {
        type: toast.TYPE.WARNING,
      });
    }
  }, [errors]);

  const onSubmit = (data) => {
    if (userInfo.accountState === 'ثبت نام اولیه') {
      paymentHandler();
    } else {
      updateUserInfo(data, uploader);
    }
  };

  return (
    <div className={classes.panelPageMain}>
      <div
        className={
          userInfo.accountState === 'در حال بررسی' ||
          userInfo.accountState === 'تایید شده'
            ? classes.panelLockDivision
            : classes.panelLockDivisionHidden
        }
      ></div>
      <PageLoader
        loading={userInfoLoading || updateLoading || paymentLoading}
      />
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
                    setUploader((prevUploader) => ({
                      ...prevUploader,
                      documentGuid: JSON.parse(file.serverId).documentGuid,
                    }));
                  },
                  onupdatefiles: (fileItems) => {
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
              disableState={userInfoLoading || updateLoading || paymentLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PanelPage;
