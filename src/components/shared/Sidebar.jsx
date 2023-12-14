import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
} from 'react-icons/ai';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';

const linkClasses = 'flex flex-col items-center font-light gap-2 px-1 py-2 hover:bg-green-700 hover:no-underline';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // Sidebar
    <div className={classNames('flex flex-col bg-green-500 p-3 text-white', { 'w-22': isSidebarOpen })}>
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between gap-2 px-1 py-3">
        <span className="text-neutral-100 text-lg">Inventory</span>
        <div className="cursor-pointer" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <AiOutlineClose fontSize={24} />
          ) : (
            <AiOutlineMenu fontSize={24} bg-green-500/>
            
          )}
        </div>
      </div>

      <div className={classNames('flex-1 py-8  flex flex-col gap-0.5', { 'hidden': !isSidebarOpen })}>
        {/* Sidebar Links */}
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  return (
    <Link to={item.path} className={classNames(linkClasses, 'text-white')}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
