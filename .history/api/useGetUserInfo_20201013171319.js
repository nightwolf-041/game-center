import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookie } from 'react-cookie';

const useGetUserInfo = (reset) => {
    const [cookies] = useCookie(['token']);
    const [userInfo, setUserInfo] = useState({});
    const [userInfoLoading, setUserInfoLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://185.211.56.9:5000/CurrentUser', {
                headers: { Authorization: 'Bearer ' + cookies.token },
            })
            .then((res) => {
                if (res.data.succeeded) {
                    setUserInfo(user);
                    setUserInfoLoading(false);
                    reset({ address: 'ییییییییهاااااا' });
                }
            });
    }, []);

    return [userInfo, userInfoLoading];
};

export default useGetUserInfo;