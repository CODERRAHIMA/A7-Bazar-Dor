import Link from 'next/link';
import React from 'react';
import NavLinkItems from './NavLinkItems';

const NavLinks = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data = await res.json();

    return (
        <div className='max-w-7xl mx-auto'>
            <NavLinkItems data={data} />
        </div>
    );
};

export default NavLinks;