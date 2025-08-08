'use client';

import { useState } from 'react';

interface ToggleProps {
  value?: string;
  onClick?: () => void;
}

export const Toggle = ({ value, onClick }: ToggleProps) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <button
      onClick={() => {
        onClick && onClick();
        setIsClick(!isClick);
      }}
      className={`flex rounded-[20px] border border-gray-100 px-3.5 py-2 text-gray-700 hover:border-green-400 hover:outline-[2px] hover:outline-green-200 active:border-green-400 active:bg-green-100 active:text-green-800 ${isClick ? 'border-green-400 bg-green-100 text-green-800' : ''}`}
    >
      {value}
    </button>
  );
};
