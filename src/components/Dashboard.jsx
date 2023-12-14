import React from 'react'
import { Link } from 'react-router-dom';
import DashBoardStatsGrid from './DashBoardStatsGrid';
import RecentOrders from './RecentOrders';
import PopularProducts from './PopularProducts';

export default function Dashboard() {

    return <div className='flex flex-col gap-4 '>
    <DashBoardStatsGrid/>
    <div className='flex flex-row gap-4 w-full'>
    <RecentOrders/>
    {/* <PopularProducts/> */}
    </div>
    </div>

}