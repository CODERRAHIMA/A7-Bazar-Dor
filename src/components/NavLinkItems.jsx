"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinkItems = ({ data }) => {

    const pathname = usePathname();

    return (
        <div className='flex gap-2 text-[13px] font-bold flex-wrap'>
            {data.map((item) => {
                const targetPath = `/category/${item.id}`;
                const isActive = pathname === targetPath;

                return (
                    <Link href={targetPath} key={item.id}>
                        <div className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors
                            ${isActive 
                                ? 'bg-green-600 text-white' 
                                : 'text-black hover:bg-gray-100'
                            }`}
                        >
                            <p>{item.icon}</p>
                            <p>{item.nameBn}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default NavLinkItems;