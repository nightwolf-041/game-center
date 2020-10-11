import React, { useState } from 'react';
import PanelInput from './PanelInput';
import FileUploader from '../../components/fileUploader/FileUploader';
import classes from './panelPage.module.css';

function PanelPage() {
  const [latinName, setLatinName] = useState({
    name: '',
    family: '',
  });
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [nickName, setNickName] = useState('');
  const [activity, setActivity] = useState('');
  const [identifireCode, setIdentifireCode] = useState('');

  const [uploader, setUploader] = useState({
    file: [],
    documentGuid: '',
  });
  const [birthDay, setBirthDay] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [startYear, setStartYear] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className={classes.panelPageMain}>
      <div className={classes.panelPageMainBackdrop}></div>
      <div className={classes.panelPageTitleBox}>
        <h1 className={classes.panelPageTitle}>تکمیل اطلاعات شخصی</h1>
      </div>
      <div className="container">
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
            <PanelInput
              inputID="birth-day"
              placeholderName="تاریخ تولد"
              requireInput
              centerText
              inputValue={birthDay}
              inputChange={(e) => setBirthDay(e.target.value)}
            />
            <PanelInput
              inputID="phone-number"
              placeholderName="تلفن ثابت"
              requireInput
              centerText
              inputValue={phoneNumber}
              inputChange={(e) => setPhoneNumber(e.target.value)}
            />
            <PanelInput
              inputID="start-year"
              placeholderName="سال شروع فعالیت"
              requireInput
              centerText
              inputValue={startYear}
              inputChange={(e) => setStartYear(e.target.value)}
            />
            <PanelInput
              inputID="location"
              placeholderName="محل سکونت"
              requireInput
              rightToLeft
              inputValue={location}
              inputChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className={classes.panelMainTopRight}>
            <PanelInput
              inputID="latin-name"
              placeholderName="نام لاتین"
              requireInput
              inputValue={latinName.name}
              inputChange={(e) =>
                setLatinName({ ...latinName, name: e.target.value })
              }
            />
            <PanelInput
              inputID="latin-family"
              placeholderName="نام خانوادگی لاتین"
              requireInput
              inputValue={latinName.family}
              inputChange={(e) =>
                setLatinName({ ...latinName, family: e.target.value })
              }
            />
            <PanelInput
              inputID="email"
              placeholderName="ایمیل"
              requireInput
              inputValue={email}
              inputChange={(e) => setEmail(e.target.value)}
            />
            <PanelInput
              inputID="gender"
              placeholderName="جنسیت"
              requireInput
              //   centerText
              inputValue={gender}
              inputChange={(e) => setGender(e.target.value)}
            />
            <PanelInput
              inputID="nick-name"
              placeholderName="اسم مستعار"
              requireInput
              inputValue={nickName}
              inputChange={(e) => setNickName(e.target.value)}
            />
            <PanelInput
              inputID="activities"
              placeholderName="حوضه فعالیت"
              requireInput
              inputValue={activity}
              inputChange={(e) => setActivity(e.target.value)}
            />
            <PanelInput
              inputID="identifire-code"
              placeholderName="کد معرف"
              centerText
              inputValue={identifireCode}
              inputChange={(e) => setIdentifireCode(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.panelMainBottom}>
          <textarea
            placeholder="نشانی"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={classes.panelTextArea}
          ></textarea>
          <textarea
            placeholder="توضیحات"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={classes.panelTextArea}
          ></textarea>
        </div>
        <div className={classes.panelMainSubmitBox}>
          <button className={classes.panelMainSubmitButton}>ثبت اطلاعات</button>
        </div>
      </div>
    </div>
  );
}

export default PanelPage;
