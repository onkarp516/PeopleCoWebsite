import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from "../Assets/BlackSideMenu.png";
import img2 from "../Assets/PurpleSideMenu.png";

const Sidebar = () => {
  return (

    <nav
      style={{
        fontFamily: 'Inter, sans-serif', // Font family
        fontWeight: 600, // Font weight
        fontSize: '16px', // Font size
        lineHeight: '20px', // Line height
      }}
    >
      <ul className="space-y-2">

        <li className="mt-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 px-4 ${isActive ? 'text-[#6941C6]' : 'hover:bg-gray-300'
              } flex items-center`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? img2 : img1} // Use appropriate image sources
                  style={{ float: 'left', height: '30px', width: '30px', padding: '5px' }}
                  alt="" // Add appropriate alt text
                />
                <p style={{ marginTop: '3px', }}>Overview</p> {/* Adjust marginLeft to account for image */}
              </>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/page1"
            className={({ isActive }) =>
              `block py-2 px-4 ${isActive ? 'text-[#6941C6]' : 'hover:bg-gray-300'} flex items-center`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? img2 : img1} // Use appropriate image sources
                  style={{ float: 'left', height: '30px', width: '30px', padding: '5px' }}
                  alt="" // Add appropriate alt text
                />
                <p style={{ marginTop: '3px', }}>People Directory</p> {/* Adjust marginLeft to account for image */}
              </>
            )}

          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
