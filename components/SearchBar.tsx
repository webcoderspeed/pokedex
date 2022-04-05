import React, { useRef } from 'react';
import Image from 'next/image';
import Pokeball from '../public/pokeball.png';

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='flex items-center justify-between relative'>
      <input
        ref={inputRef}
        type='text'
        placeholder='Search your Pokemon!'
        className='flex-1 p-4 rounded-xl shadow-gray-200 shadow-md focus:outline-none focus:shadow-outline'
      />
      <div
        className='p-4 shadow-xl shadow-red-200 absolute right-5 z-10 bg-red-400 rounded-lg cursor-pointer'
        onClick={() =>
          alert(`Your Searched Pokemon ${inputRef.current?.value}`)
        }
      />
    </div>
  );
};

export default SearchBar;
