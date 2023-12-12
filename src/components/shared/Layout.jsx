import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar/>
      <div className="p-4">
      <div className="bg-red-500">header</div>
      <div className="bg-blue-400">{<Outlet />}</div>

      </div>

    </div>
  );
}
