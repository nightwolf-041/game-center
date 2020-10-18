import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useUpdateUserInfo = (reset) => {
    const [cookies] = useCookies(['token']);
    const [updateLoading, setUpdateLoading] = useState(false);

    const updateUserInfo = (data) => {
        setUpdateLoading(true);
        axios
            .put(
                'http://185.211.56.9:5000/CurrentUser', {
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
                }, {
                    headers: { Authorization: 'Bearer ' + cookies.token },
                }
            )
            .then((res) => {
                if (res.data.succeeded) {
                    toast('عملیات موفقیت آمیز بود', { type: toast.TYPE.SUCCESS });
                } else {
                    toast(res.data.errors[0], { type: toast.TYPE.ERROR });
                }
            })
            .catch((err) => {
                toast('خطای شبکه', { type: toast.TYPE.ERROR });
            })
            .finally(() => {
                setUpdateLoading(false);
            });
    };
    return [userInfo, userInfoLoading, getUserInfo];
};

export default useUpdateUserInfo;

// activities: {label: "فعالیت شماره 1", value: "65856ab5-c244-44f7-a815-92d47b346f18"}
// address: "ییییییییهاااااا"
// birthDay: {value: 29, label: 29}
// birthMouth: {value: 4, label: 4}
// birthYear: {value: "1380", label: "1380"}
// description: "sdfsdfdsf"
// email: "white.luciferrr@gmail.com"
// gender: {value: "0", label: "مرد"}
// identifireCode: "dsfdsfsf"
// latinFamily: "asdasdsad"
// latinName: "asdasdsad"
// nickName: "sdfsdfdsf"
// persianFamily: "سیبلسیبسیب"
// persianName: "یبلسیب"
// phoneNumber: "04152266472"
// province: {label: "آذربايجان غربي", value: "97caa01b-c47f-4d57-a1ee-da2323026729"}
// startYear: {value: "1399", label: "1399"}