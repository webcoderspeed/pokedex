import React, { FC } from 'react';

type Props = {
  list: string[];
  onSelect: (value: string) => void;
  Icon: React.ReactNode;
};

const Dropdown: FC<Props> = ({ Icon, list, onSelect }) => {
  return (
    <>
      <div className='flex items-center justify-center shadow-md rounded-lg'>
        {Icon}
        <select
          className=' flex-1 border-2 border-gray-400 focus:outline-none border-none rounded-lg py-2 px-4 block w-full leading-normal text-gray-400 text-opacity-90'
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value='Category'>Category</option>
          {list.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
