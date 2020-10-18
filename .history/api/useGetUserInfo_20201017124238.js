import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

const useGetUserInfo = () => {
    const [cookies] = useCookies(['token']);
    const [userInfo, setUserInfo] = useState([]);
    const [userInfoLoading, setUserInfoLoading] = useState(true);

    const getUserInfo = (reset, uploader, setUploader) => {
        axios
            .get('http://185.211.56.9:5000/CurrentUser', {
                headers: { Authorization: 'Bearer ' + cookies.token },
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.succeeded) {
                    setUserInfo(res.data.user);
                    let resUser = res.data.user;
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
                    console.log(birthdayValue.match(birthdayRegex));
                    // console.log(birthdayValue.match(birthdayRegex));
                    setUploader(oldProfileImage);
                    reset({
                        activities: resUser.activities.map((activity) => {
                            return {
                                value: activity.activityGuid,
                                label: activity.name,
                            };
                        }),
                        address: resUser.address,
                        birthDay: {
                            value: '01',
                            label: '01',
                        },
                        birthMouth: {
                            value: '11',
                            label: '11',
                        },
                        birthYear: {
                            value: '1374',
                            label: '1374',
                        },
                        description: resUser.description,
                        email: resUser.email,
                        gender: {
                            value: resUser.gender.genderId,
                            label: resUser.gender.name,
                        },
                        identifireCode: resUser.userIdentifierIntroduced,
                        latinFamily: resUser.latinLastName,
                        latinName: resUser.latinFirstName,
                        nickName: resUser.nickName,
                        persianFamily: resUser.lastName,
                        persianName: resUser.firstName,
                        telephone: resUser.telephone,
                        province: {
                            value: resUser.province.provinceGuid,
                            label: resUser.province.name,
                        },
                        startYear: {
                            value: resUser.activitiesStartYear,
                            label: resUser.activitiesStartYear,
                        },
                    });
                    // setValue('gender', { value: 0, label: 'مرد' });
                } else {
                    toast(res.data.errors[0], { type: toast.TYPE.ERROR });
                }
            })
            .catch((err) => {
                toast('خطا در بارگیری اطلاعات', { type: toast.TYPE.ERROR });
            })
            .finally(() => {
                setUserInfoLoading(false);
            });
    };
    return [userInfo, userInfoLoading, getUserInfo];
};

export default useGetUserInfo;