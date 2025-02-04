import React from "react";
import Image from "next/image"; 
import { ShoppingCartIcon } from "@heroicons/react/24/outline"; 
import Link from "next/link"; 

const MainHeader = () => {
  return (
    <div className="bg-[#F0F2F3] p-2 flex items-center justify-between max-w-[1920px] mx-auto h-[60px] md:h-[80px]">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 md:w-12 md:h-12"> 
          <Image
            src="/images/logo.png" 
            alt="Logo"
            width={48} 
            height={48}
            className="rounded-full ml-2 md:ml-2" 
          />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-[#272343]">Comforty</h1>
      </div>
      <div className="flex items-center space-x-6">
        <div className="w-[118px] h-[42px] bg-white flex items-center justify-between px-4 border border-[#272343]">
          <Link href="/cart" className="flex items-center space-x-2">
            <ShoppingCartIcon className="w-5 h-5 text-[#272343] cursor-pointer" />
            <span className="font-bold text-[#272343]">Cart</span> 
          </Link>

          <div className="w-5 h-5 rounded-full bg-[#029FAE] flex items-center justify-center text-white text-xs font-semibold space-x-1">
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
