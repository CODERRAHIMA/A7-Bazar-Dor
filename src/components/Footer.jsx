import React from 'react';

const Footer = () => {
    return (
        <div className="py-6 sm:py-8 border-t border-gray-200 px-4 sm:px-6">
            <div className="text-xs sm:text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3 sm:gap-6 max-w-7xl mx-auto text-center sm:text-left">
                <p>
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>

                <p>
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </p>
            </div>
        </div>
    );
};

export default Footer;