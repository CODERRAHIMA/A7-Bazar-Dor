import Image from 'next/image';
import React, { Suspense } from 'react';
import CurrentDate from './CurrentDate';
import NavLinks from './NavLinks';
import Marquee from './Marquee';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="">
            <div className="flex justify-between max-w-7xl mx-auto my-3">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <div className=" p-2 rounded-xl"><Image src="/logo-icon.png" alt="logo" width={25} height={25} /></div>
                        <div>
                            <h2 className='font-extrabold'>বাজার দর</h2>
                            <CurrentDate />
                        </div>
                    </div>
                </Link>

                <div className='flex items-center gap-6 text-xs font-semibold text-gray-800'>
                    <button className='hover:text-black transition-colors font-bold'>
                        সাইন ইন
                    </button>
                    <button className='bg-[#008744] px-4 py-2.5 text-white rounded-xl shadow-md hover:bg-[#007038] transition-all active:scale-95'>
                        সাইন আপ
                    </button>
                </div>
            </div>

            <div className='border border-gray-100 p-4'>
                <Suspense fallback={<div>Loading...</div>}>
                    <NavLinks />
                </Suspense>
            </div>

            <Suspense>
                <Marquee />
            </Suspense>

        </div>
    );
};

export default Header;