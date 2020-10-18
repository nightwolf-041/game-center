import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useGetUserInfo = (reset) => {
    const [cookies] = useCookies(['token']);
    const [userInfo, setUserInfo] = useState({});
    const [userInfoLoading, setUserInfoLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://185.211.56.9:5000/CurrentUser', {
                headers: { Authorization: 'Bearer ' + cookies.token },
            })
            .then((res) => {
                if (res.data.succeeded) {
                    setUserInfo(res.data.user);
                    setUserInfoLoading(false);
                    reset({ address: 'ییییییییهاااااا' });
                }
            });
    }, []);

    return [userInfo, userInfoLoading];
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