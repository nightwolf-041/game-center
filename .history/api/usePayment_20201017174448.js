import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

const usePayment = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const paymentHandler = () => {
        axios
            .post(
                'http://185.211.56.9:5000/Payment', {}, {
                    headers: { Authorization: 'Bearer ' + cookies.token },
                }
            )
            .then((res) => {
                if (res.data.succeeded) {
                    window.location.href = res.data.url;
                } else {
                    toast(res.data.errors[0], { type: toast.TYPE.ERROR });
                }
            })
            .catch((err) => {
                toast('خطای شبکه', { type: toast.TYPE.ERROR });
            })
            .finally(() => {
                setPaymentLoading(false);
            });
    };

    return [paymentLoading, paymentHandler];
};

export default usePayment;