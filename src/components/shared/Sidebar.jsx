import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
const linkClasses='flex flex-col items-center font-light gap-2 px-1 py-2 hover:bg-green-700 hover:no-underline';
export default function Sidebar() {
    return (
        // Sidebar
        <div className='flex flex-col bg-green-500 w-22 p-3 text-white'>
          {/* Logo */}
          <div className='flex items-center gap-2 px-1 py-3'>
            <FcBullish fontSize={24} />
            <span className='text-neutral-100 text-lg'>OpenShop</span>
          </div>
          <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {/* Sidebar Links */}
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>
         
        </div>
      );
            }      

function SidebarLink({item}){
return (
<Link to={item.path} className={classNames(linkClasses,"text-white") }>
<span className='text-xl'>{item.icon}</span>
{item.label}
</Link>

)

}