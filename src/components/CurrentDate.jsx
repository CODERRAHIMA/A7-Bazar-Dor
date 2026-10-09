'use client';

import { useEffect, useState } from 'react';

const CurrentDate = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const handle = requestAnimationFrame(() => {
            setDate(new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' }));
        });

        return () => cancelAnimationFrame(handle);
    }, []);

    if (!date) return null; 

    return <p className='text-[11px] font-semibold text-gray-700'>{date}</p>;
};

export default CurrentDate;
