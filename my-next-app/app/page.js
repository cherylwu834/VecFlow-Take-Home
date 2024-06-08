'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

const VecFlowSearch = () => {
    const router = useRouter();

    return (
      <main>
        <SearchBar />
    </main>
  );
};

export default VecFlowSearch;