'use client';

import React from 'react';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';

const VecFlowSearch = () => {
    return (
      <div className="h-screen flex">
        <SideBar />
        <div className="flex-1 flex items-center justify-center bg-logo-pattern">
          <SearchBar />
        </div>
      </div>
  );
};

export default VecFlowSearch;