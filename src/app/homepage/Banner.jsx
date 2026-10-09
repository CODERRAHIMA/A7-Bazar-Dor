import Link from 'next/link';
import Image from 'next/image';
import { connection } from 'next/server';

const BannerPage = async() => {
    await connection(); 

    const formattedDate = new Intl.DateTimeFormat('bn-BD', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date());
    
    return (
        <div>
            <div className="w-full">
                <div className="bg-white rounded-3xl px-6 md:px-10 py-4 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-2 relative overflow-hidden">

                    <div className="flex-1 space-y-4 text-left z-10">
                        <div className="inline-block bg-[#EAF6ED] text-[#008744] text-xs font-semibold px-3 py-1.5 rounded-full">
                            {formattedDate}
                        </div>

                        <h1 className="text-2xl md:text-3xl font-extrabold text-[#111111] leading-tight">
                            আজকের বাজারের দাম এক নজরে
                        </h1>

                        <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
                        </p>

                        <div className="pt-2">
                            <Link href="/#all-items" className="inline-block bg-[#008744] hover:bg-[#007038] text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-md transition-all transform active:scale-95">
                                সব পণ্য দেখুন
                            </Link>
                        </div>
                    </div>

                    <div className="flex-shrink-0 relative flex items-center justify-center">
                        <Image src="/bazar-hero.png" alt="hero" height={350} width={350} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BannerPage;