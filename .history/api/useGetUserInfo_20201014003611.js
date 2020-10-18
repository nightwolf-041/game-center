import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useGetUserInfo = (reset) => {
    const [cookies] = useCookies(['token']);
    const [userInfo, setUserInfo] = useState({});
    const [userInfoLoading, setUserInfoLoading] = useState(true);

    const getUserInfo = (reset, uploader, setUploader) => {
        axios
            .get('http://185.211.56.9:5000/CurrentUser', {
                headers: { Authorization: 'Bearer ' + cookies.token },
            })
            .then((res) => {
                if (res.data.succeeded) {
                    let resUser = res.data.user;
                    setUserInfo(res.data.user);
                    setUserInfoLoading(false);
                    //get old profile image file and guid
                    const oldProfileImage = resUser.profileImage ?
                        {
                            ...uploader,
                            file: [...uploader.file, resUser.profileImage],
                            documentGuid: resUser.profileImage.guid,
                        } :
                        {...uploader };
                    // slice birthday values
                    let birthdayRegex = /(\d{4})\/(\d{2})\/(\d{2})/;
                    let birthdayValue = resUser.birthday;
                    let birthdayArray =
                        birthdayValue && birthdayValue.match(birthdayRegex);
                    setUploader(oldProfileImage);
                    reset({
                        activities: resUser.activities,
                        address: resUser.address,
                        birthDay: birthdayArray && birthdayArray[2],
                        birthMouth: birthdayArray && birthdayArray[1],
                        birthYear: birthdayArray && birthdayArray[0],
                        description: resUser.description,
                        email: resUser.email,
                        gender: resUser.gender,
                        identifireCode: resUser.userIdentifierIntroduced,
                        latinFamily: resUser.latinLastName,
                        latinName: resUser.latinFirstName,
                        nickName: resUser.nickName,
                        persianFamily: resUser.lastName,
                        persianName: resUser.firstName,
                        telephone: resUser.telephone,
                        province: resUser.province,
                        startYear: resUser.activitiesStartYear,
                    });
                }
            });
    };
    return [userInfo, userInfoLoading, getUserInfo];
};

export default useGetUserInfo;