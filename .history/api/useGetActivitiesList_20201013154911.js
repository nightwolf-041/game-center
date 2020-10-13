import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetActivitiesList = () => {
    const [activities, setActivities] = useState([]);
    const [activitiesLoading, setActivitiesLoading] = useState(true);

    useEffect(() => {
        axios.get('http://185.211.56.9:5000/Activity').then((res) => {
            if (res.data.succeeded) {
                let activitiesList = res.data.activities.map((activity) => {
                    return {
                        value: activity.name,
                        activity.activityGuid;
                    }
                });
                console.log(activitiesList);
                setActivities(activitiesList);
                setActivitiesLoading(false);
            }
        });
    }, []);

    return [activities, activitiesLoading];
};

export default useGetActivitiesList;