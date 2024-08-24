import React from 'react';
import { FaBell } from 'react-icons/fa';
import img1 from "../Assets/Profile.png";


const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center"
      style={{
        width: '1920px', // Fixed width
        height: '88px', // Fixed height
        borderBottom: '1px solid #000000', // Bottom border
        borderTop: '0px',
        borderRight: '0px',
        borderLeft: '0px',
      }}
    >
      <h1 className="font-bold text-[38px] leading-[47.5px]" style={{ color: '#6941C6' }}>
        PEOPLE.CO
      </h1>
      <div className="flex items-center space-x-4">
        <FaBell className="text-[#000000] text-2xl" />
        <img
          src={img1}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-[#000000] font-medium">John Doe</span>
      </div>
    </header>
  );
};

export default Header;