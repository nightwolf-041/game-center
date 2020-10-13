import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProvinces = () => {
    const [provinces, setProvinces] = useState([]);
    const [provincesLoading, setProvincesLoading] = useState(true);

    useEffect(() => {
        axios.get('http://185.211.56.9:5000/Province').then((res) => {
            if (res.data.succeeded) {
                setProvinces(res.data.provinces);
                setProvincesLoading(false);
            }
        });
    }, []);

    return [provinces, provincesLoading];
};

export default useGetProvinces;