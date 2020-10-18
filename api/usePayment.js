import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

const usePayment = () => {
    const [cookies] = useCookies(['token']);
    const [paymentLoading, setPaymentLoading] = useState(false);

    const paymentHandler = () => {
        setPaymentLoading(true);
        axios
            .post(
                'http://185.211.56.9:5000/Payment', {}, {
                    headers: { Authorization: 'Bearer ' + cookies.token },
                }
            )
            .then((res) => {
                if (res.data.succeeded) {
                    toast('در حال انتقال به درگاه پرداخت', { type: toast.TYPE.SUCCESS });
                    setTimeout(() => {
                        window.location.href = res.data.url;
                    }, 1000);
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