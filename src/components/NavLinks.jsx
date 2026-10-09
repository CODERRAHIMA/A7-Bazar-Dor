import Link from 'next/link';
import React from 'react';

const NavLinks = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
    const data = await res.json();

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex gap-6 text-xs font-bold'>
                {
                    data.map((item) => (
                        <Link href={`/category/${item.id}`} key={item.id}>
                            <div className='flex items-center gap-1'>
                                <p>{item.icon}</p>
                                <p>{item.nameBn}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default NavLinks;