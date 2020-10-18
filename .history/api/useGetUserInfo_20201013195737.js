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
                    const oldProfileImage = {
                        ...uploader,
                        file: [...uploader.file, resUser.profileImage],
                        documentGuid: resUser.profileImage.guid,
                    };
                    // let birthDayPattern = resUser.birthday
                    var regexBirth = Regex.Match(request.Birthday, @ "(\d{4})\/(\d{2})\/(\d{2})");
                    // Check if the user's input birthday's valid
                    if (!regexBirth.Success) {
                        string[] errors = new string[] { "تاریخ تولد نامعتبر است" };
                        return ResultViewModel.Failure(errors);
                    }
                    setUploader(oldProfileImage);
                    reset({
                        activities: resUser.activities,
                        address: resUser.address,
                        birthDay: '',
                        birthMouth: '',
                        birthYear: '',
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