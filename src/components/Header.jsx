import Image from 'next/image';
import React, { Suspense } from 'react';
import CurrentDate from './CurrentDate';
import NavLinks from './NavLinks';
import Marquee from './Marquee';
import Link from 'next/link';
import GlobalLoading from '@/app/loading';
import UserInfoPage from './UserInfo';

const Header = () => {

    return (
        <div className="">
            <div className="flex justify-between max-w-7xl mx-auto my-3">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <div className=" p-2 rounded-xl"><Image src="/logo-icon.png" alt="logo" width={25} height={25} /></div>
                        <div>
                            <h2 className='text-[17px] mb-1 font-extrabold'>বাজার দর</h2>
                            <CurrentDate />
                        </div>
                    </div>
                </Link>

                <UserInfoPage />
            </div>

            <div className='border border-gray-100 p-2'>
                <Suspense fallback={<GlobalLoading />}>
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