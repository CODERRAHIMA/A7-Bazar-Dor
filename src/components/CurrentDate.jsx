'use client';

import { useEffect, useState } from 'react';

const CurrentDate = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        setDate(new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' }));
    }, []);

    return <p className='text-[11px] font-semibold text-gray-700'>{date}</p>;
};

export default CurrentDate;
