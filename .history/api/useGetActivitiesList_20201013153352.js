import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetActivitiesList = () => {
    const [activities, setActivities] = useState([]);
    const [activitiesLoading, setActivitiesLoading] = useState(true);

    useEffect(() => {
        axios.get('http://185.211.56.9:5000/Province').then((res) => {
            if (res.data.succeeded) {
                setActivities(res.data.activities);
                setActivitiesLoading(false);
            }
        });
    }, []);

    return [activities, activitiesLoading];
};

export default useGetActivitiesList;