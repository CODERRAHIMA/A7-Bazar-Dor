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
        <div className="w-full">
            <div className="flex justify-between items-center gap-3 max-w-7xl mx-auto my-3 px-3 sm:px-5 lg:px-6">
                <Link href="/" className="min-w-0">
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl shrink-0">
                            <Image
                                src="/logo-icon.png"
                                alt="logo"
                                width={25}
                                height={25}
                            />
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-[17px] sm:text-lg mb-1 font-extrabold whitespace-nowrap">
                                বাজার দর
                            </h2>
                            <CurrentDate />
                        </div>
                    </div>
                </Link>

                <div className="shrink-0">
                    <UserInfoPage />
                </div>
            </div>

            <div className="border border-gray-100 px-2 sm:px-4 py-2 overflow-x-auto">
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