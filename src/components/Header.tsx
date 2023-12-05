import React from 'react';
import { IoRocketSharp } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur">
      <div className="px-10 h-14 flex justify-between gap-2">
        <Link href={'/'} passHref>
          <div className="flex items-center gap-2 hover:cursor-pointer">
            <IoRocketSharp className="text-white" />
            <h2 className="text-slate-50 font-semibold">Deep Space</h2>
          </div>
        </Link>
        <nav className="flex items-center">
          <button className="group relative inline-flex items-center gap-2 text-slate-50 hover:text-slate-200">
            <FaHeart className="text-rose-500 group-hover:text-rose-700" />
            Wishlish
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
