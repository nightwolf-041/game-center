import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useUpdateUserInfo = (reset) => {
    const [cookies] = useCookies(['token']);
    const [updateLoading, setUpdateLoading] = useState(false);

    const updateUserInfo = (data, uploader) => {
        setUpdateLoading(true);
        axios
            .put(
                'http://185.211.56.9:5000/CurrentUser', {
                    profileImageGuid: uploader.documentGuid,
                    provinceGuid: data.province.value,
                    firstName: data.persianName,
                    lastName: data.persianFamily,
                    latinFirstName: data.latinFamily,
                    latinLastName: data.latinName,
                    nickName: data.nickName,
                    gender: data.gender.value,
                    birthday: `${data.birthYear.value}/${data.birthMouth.value}/${data.birthDay.value}`,
                    email: data.email,
                    telephone: data.telephone,
                    address: data.address,
                    activitiesGuids: Array.isArray(data.activities) ?
                        data.activities.map((activity) => activity.value) :
                        data.activities.value,
                    activitiesStartYear: data.startYear.value,
                    description: data.description,
                    userIdentifierIntroduced: data.identifireCode,
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
    return [updateLoading, updateUserInfo];
};

export default useUpdateUserInfo;