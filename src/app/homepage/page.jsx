import React, { Suspense } from 'react';
import BannerPage from './Banner';
import ProductCard from '@/components/ProductCard';

const HomePage = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const data = await res.json();

    const upData = data.filter(item => item?.change?.dir === "up").sort((a, b) => b.change.pct - a.change.pct);

    const downData = data.filter(item => item?.change?.dir === "down").sort((a, b) => a.change.pct - b.change.pct);

    return (
        <div className='py-12'>
            <div className="max-w-7xl mx-auto">
                <Suspense>
                    <BannerPage />
                </Suspense>

                {/* increased price items */}
                {/* <div className="my-12">
                    <h2 className="mb-4 text-lg font-extrabold">
                        <span className="text-red-600">▲</span> আজ দাম বেড়েছে
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {upData.slice(0, 6).map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                </div> */}

                {/* decreased price items */}
                {/* <div className="my-12">
                    <h2 className="mb-4 text-lg font-extrabold">
                        <span className="text-green-600">▼</span> আজ দাম কমেছে
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {downData.slice(0, 6).map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                </div> */}


                {/* all items */}
                {/* <div className="my-2" id="all-items">
                    <h2 className='mb-4 text-xl font-extrabold'>সব পণ্য</h2>
                    <p className='text-gray-600 mb-4 '>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {data.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default HomePage;