'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { Search } from "lucide-react";

const VecFlowSearch = () => {
    const router = useRouter();

    return (
      <div className="h-screen flex">
        {/* Sidebar */}
        <div className="w-64 bg-purple text-white p-5 flex flex-col">
            {/* VecFlow item */}
            <div className="mb-2 bg-dark-purple p-6 rounded-l-none rounded-r-none -mx-5 -mt-5 flex items-end justify-between h-1/5" >
              <img src="/logo.svg" alt="VecFlow" className="h-12 w-12 mr-2" />
              <span className="text-3xl">VecFlow</span>
            </div>

            {/* Search item */}
            <button className="w-full mb-2 hover:bg-dark-purple p-2 rounded flex items-center">
                <img src="/search-icon.svg" alt="Search" className="h-6 w-6 mr-2" />
                Search
            </button>
            <ul>
                <button className="w-full mb-2 hover:bg-dark-purple p-2 rounded flex items-center">
                    <img src="/data-icon.svg" alt="SEC" className="h-6 w-6 mr-2" />
                    SEC
                </button>
                <button className="w-full mb-2 hover:bg-dark-purple p-2 rounded flex items-center">
                    <img src="/data-icon.svg" alt="Database" className="h-6 w-6 mr-2" />
                    Database
                </button>
            </ul>
            {/* Account and Settings Buttons */}
            <div className="mt-auto">
                <button className="w-full hover:bg-dark-purple p-2 rounded text-left mb-2 flex items-center">
                    <img src="/person.svg" alt="Account" className="h-6 w-6 mr-2" />
                    Account
                </button>
                <button className="w-full hover:bg-dark-purple p-2 rounded text-left flex items-center">
                    <img src="/settings.svg" alt="Settings & Help" className="h-6 w-6 mr-2" />
                    Settings & Help
                </button>
            </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex items-center justify-center">
              <SearchBar />
        </div>
      </div>
  );
};

export default VecFlowSearch;