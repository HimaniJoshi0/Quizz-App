import React, { useState } from 'react';
import { Navtypes } from '@/lib/types';
import { Navdata } from '@/lib/data';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const renderHeader = (item: Navtypes, index: number) => {
    return (
      <div key={index}>
        <Link href={item.link} className={` transition-all duration-300 px-2  rounded ${currentRoute === item.link ? "bg-white/60" : ""}`}>{item.title}</Link>
      </div>
    );
  };

  return (
    <>
      <div className='py-4 px-8  bg-black text-white flex justify-between'>

        <div>
          <h1>LOGO</h1>
        </div>
        <div className='hidden md:flex gap-10'>
          {Navdata.map(renderHeader)}
        </div>
        {isMenuOpen ?
          <div className='absolute top-0 left-0 border-2 w-full h-screen bg-black md:hidden p-4'>
            <div className='flex justify-between items-center'>
              <h1>LOGO</h1>
              <div className='' onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
                CROSS
              </div>
            </div>

            <div className={`flex justify-center items-center flex-col gap-4 w-full  bg-black text-white ${setIsMenuOpen}`}>
              {Navdata.map(renderHeader)}
            </div>
          </div>
          :
          <></>
        }
        <div className='flex md:hidden' onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
          Icon
        </div>
        <Link href="/login">Login</Link>
      </div>
    </>
  );
};

export default Navbar;
