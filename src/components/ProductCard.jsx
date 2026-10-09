import React from 'react';

const ProductCard = ({ item }) => {
    return (
        <div className="flex flex-col gap-4 rounded-[20px] border border-[#dce6df] bg-[#f9fcfa] p-[18px]">

            <div className="flex items-center gap-3">
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f1] text-2xl">
                    {item.image}
                </div>

                <div>
                    <h4 className="text-lg font-bold leading-6">
                        {item.nameBn}
                    </h4>
                    <p className="text-xs text-[#4b5750]">
                        প্রতি কেজি
                    </p>
                </div>
            </div>

            <div className="flex items-end justify-between">
                <div>
                    <p className="mb-1 text-sm text-[#4b5750]">
                        আজকের দাম
                    </p>
                    <h4 className="text-xl font-bold leading-6 text-[#26332b]">
                        {item.today} টাকা
                    </h4>
                </div>

                <div className={`flex items-center gap-1 rounded-full bg-[#f0f5f1] px-3 py-1.5 text-sm font-semibold 
                    ${item.change.pct === 0 ? "text-black" : item.change.dir === "up" ? "text-red-600" : "text-green-600"}`}
                >
                    {item.change.pct === 0 ? "-" : item.change.dir === "up" ? "▲" : "▼"}
                    <span>
                        {item.change.pct === 0 ? "০.০" : new Intl.NumberFormat("bn-BD").format(Math.abs(item.change.pct))}%
                    </span>
                </div>
            </div>

        </div>
    );


};

export default ProductCard;
