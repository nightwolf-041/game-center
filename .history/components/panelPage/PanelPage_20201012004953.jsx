// import React, { useState } from 'react';
// import PanelInput from './PanelInput';
// import FileUploader from '../../components/fileUploader/FileUploader';
// import classes from './panelPage.module.css';

// function PanelPage() {
//   const [latinName, setLatinName] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [latinFamily, setLatinFamily] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [email, setEmail] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [gender, setGender] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [nickName, setNickName] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [activity, setActivity] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [identifireCode, setIdentifireCode] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [uploader, setUploader] = useState({
//     file: [],
//     documentGuid: '',
//   });
//   const [birthDay, setBirthDay] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [phoneNumber, setPhoneNumber] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [startYear, setStartYear] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [location, setLocation] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [address, setAddress] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });
//   const [description, setDescription] = useState({
//     value: '',
//     valid: true,
//     validMessage: '',
//   });

//   const sendData = () => {
//     if (latinName.value.length === 0) {
//       setLatinName({ ...latinName, valid: false, validMessage: 'الزامیست' });
//     } else if (
//       latinName.value.length >= 0 &&
//       !/^[a-zA-Z$@$!%*?&#^-_. +]+$/.test(latinName.value)
//     ) {
//       setLatinName({
//         ...latinName,
//         valid: false,
//         validMessage: 'از حروف لاتین استفاده کنید',
//       });
//     } else if (
//       latinName.value.length >= 0 &&
//       /^[a-zA-Z$@$!%*?&#^-_. +]+$/.test(latinName.value)
//     ) {
//       setLatinName({ ...latinName, valid: true, validMessage: '' });
//     }
//   };

//   return (
//     <div className={classes.panelPageMain}>
//       <div className={classes.panelPageMainBackdrop}></div>
//       <div className={classes.panelPageTitleBox}>
//         <h1 className={classes.panelPageTitle}>تکمیل اطلاعات شخصی</h1>
//       </div>
//       <div className="container">
//         <div className={classes.panelMainTop}>
//           <div className={classes.panelMainTopLeft}>
//             <FileUploader
//               customConfig={{
//                 files: uploader.file,
//                 imageValidateSizeMinWidth: 300,
//                 imageValidateSizeMaxWidth: 750,
//                 imageValidateSizeMinHeight: 300,
//                 imageValidateSizeMaxHeight: 750,
//                 onprocessfile: (error, file) => {
//                   console.log(file.serverId);
//                   setUploader((prevUploader) => ({
//                     ...prevUploader,
//                     documentGuid: JSON.parse(file.serverId).documentGuid,
//                   }));
//                 },
//                 onupdatefiles: (fileItems) => {
//                   console.log(fileItems.file);
//                   setUploader((prevUploader) => ({
//                     ...prevUploader,
//                     file: fileItems.map((fileItem) => fileItem.file),
//                   }));
//                 },
//               }}
//             />
//             <PanelInput
//               inputID="birth-day"
//               placeholderName="تاریخ تولد"
//               requireInput
//               centerText
//               inputValue={birthDay.value}
//               inputChange={(e) =>
//                 setBirthDay({ ...birthDay, value: e.target.value })
//               }
//             />
//             <PanelInput
//               inputID="phone-number"
//               placeholderName="تلفن ثابت"
//               requireInput
//               centerText
//               inputValue={phoneNumber.value}
//               inputChange={(e) =>
//                 setPhoneNumber({ ...phoneNumber, value: e.target.value })
//               }
//             />
//             <PanelInput
//               inputID="start-year"
//               placeholderName="سال شروع فعالیت"
//               requireInput
//               centerText
//               inputValue={startYear.value}
//               inputChange={(e) =>
//                 setStartYear({ ...startYear, value: e.target.value })
//               }
//             />
//             <PanelInput
//               inputID="location"
//               placeholderName="محل سکونت"
//               requireInput
//               rightToLeft
//               inputValue={location.value}
//               inputChange={(e) =>
//                 setLocation({ ...location, value: e.target.value })
//               }
//             />
//           </div>
//           <div className={classes.panelMainTopRight}>
//             <PanelInput
//               inputID="latin-name"
//               placeholderName="نام لاتین"
//               requireInput
//               inputValue={latinName.value}
//               validMessage={latinName.validMessage}
//               inputChange={(e) =>
//                 setLatinName({ ...latinName, value: e.target.value })
//               }
//             />
//             <PanelInput
//               inputID="latin-family"
//               placeholderName="نام خانوادگی لاتین"
//               requireInput
//               inputValue={latinFamily.value}
//               inputChange={(e) =>
//                 setLatinFamily({ ...latinFamily, value: e.target.value })
//               }
//             />
//             <PanelInput
//               inputID="email"
//               placeholderName="ایمیل"
//               requireInput
//               inputValue={email.value}
//               inputChange={(e) => setEmail({ ...email, value: e.target.value })}
//             />
//             <PanelInput
//               inputID="gender"
//               placeholderName="جنسیت"
//               requireInput
//               //   centerText
//               inputValue={gender.value}
//               inputChange={(e) =>
//                 setGender({ ...gender, value: e.target.value })
//               }
//             />
//             <PanelInput
//               inputID="nick-name"
//               placeholderName="اسم مستعار"
//               requireInput
//               inputValue={nickName.value}
//               inputChange={(e) =>
//                 setNickName({ ...nickName, value: e.target.value })
//               }
//             />
//             <PanelInput
//               inputID="activities"
//               placeholderName="حوضه فعالیت"
//               requireInput
//               inputValue={activity.value}
//               inputChange={(e) =>
//                 setActivity({ ...activity, value: e.target.value })
//               }
//             />
//             <PanelInput
//               inputID="identifire-code"
//               placeholderName="کد معرف"
//               centerText
//               inputValue={identifireCode.value}
//               inputChange={(e) =>
//                 setIdentifireCode({ ...identifireCode, value: e.target.value })
//               }
//             />
//           </div>
//         </div>
//         <div className={classes.panelMainBottom}>
//           <div className={classes.panelTextAreaBox}>
//             <div className={classes.panelTextareaLabelBox}>
//               <label htmlFor="addressTextarea">نشانی</label>
//             </div>
//             <textarea
//               id="addressTextarea"
//               value={address.value}
//               onChange={(e) =>
//                 setAddress({ ...address, value: e.target.value })
//               }
//               className={classes.panelTextArea}
//             ></textarea>
//           </div>
//           <div className={classes.panelTextAreaBox}>
//             <div className={classes.panelTextareaLabelBox}>
//               <label htmlFor="descriptionTextarea">توضیحات</label>
//             </div>
//             <textarea
//               id="descriptionTextarea"
//               value={description.value}
//               onChange={(e) =>
//                 setDescription({ ...description, value: e.target.value })
//               }
//               className={classes.panelTextArea}
//             ></textarea>
//           </div>
//           <div className={classes.panelMainSubmitBox}>
//             <button
//               className={classes.panelMainSubmitButton}
//               onClick={sendData}
//             >
//               ثبت اطلاعات
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PanelPage;

import React, { useState } from 'react';
import PanelInput from './PanelInput';
import FileUploader from '../../components/fileUploader/FileUploader';
import classes from './panelPage.module.css';
import { useForm } from 'react-hook-form';

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
              <PanelInput
                name="birthDay"
                inputID="birth-day"
                placeholderName="تاریخ تولد"
                requireInput
                centerText
                ref={register}
              />
              <PanelInput
                name="phoneNumber"
                inputID="phone-number"
                placeholderName="تلفن ثابت"
                requireInput
                centerText
                ref={register({ required: true })}
              />
              <PanelInput
                name="startYear"
                inputID="start-year"
                placeholderName="سال شروع فعالیت"
                requireInput
                centerText
                ref={register}
              />
              <PanelInput
                name="location"
                inputID="location"
                placeholderName="محل سکونت"
                requireInput
                rightToLeft
                ref={register}
              />
            </div>
            <div className={classes.panelMainTopRight}>
              <PanelInput
                name="latinName"
                inputID="latin-name"
                placeholderName="نام لاتین"
                requireInput
              />
              <PanelInput
                name="latinFamily"
                inputID="latin-family"
                placeholderName="نام خانوادگی لاتین"
                requireInput
                ref={register}
              />
              <PanelInput
                name="email"
                inputID="email"
                placeholderName="ایمیل"
                requireInput
                ref={register}
              />
              <PanelInput
                name="gender"
                inputID="gender"
                placeholderName="جنسیت"
                requireInput
                ref={register}
              />
              <PanelInput
                name="nickName"
                inputID="nick-name"
                placeholderName="اسم مستعار"
                requireInput
                ref={register}
              />
              <PanelInput
                name="activities"
                inputID="activities"
                placeholderName="حوضه فعالیت"
                requireInput
                ref={register}
                register={register}
                required
              />
              <PanelInput
                name="identifireCode"
                inputID="identifire-code"
                placeholderName="کد معرف"
                centerText
                ref={register}
              />
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
              {/* <button className={classes.panelMainSubmitButton}>
              ثبت اطلاعات
              </button> */}
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
