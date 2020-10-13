import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProvinces = () => {
    const [provinces, setProvinces] = useState([]);
    const [provincesLoading, setProvincesLoading] = useState(true);

    useEffect(() => {
        axios.get('http://185.211.56.9:5000/');
    }, []);
};

export default useGetProvinces;