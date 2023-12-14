import React from 'react'
import {IoBagHandle} from 'react-icons/io5'
export default function DashBoardStatsGrid() {
  return (
    <div className='flex gap-4 w-full'>
<BoxWrapper >
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
       <IoBagHandle className='text-2x text-white'/> 
    </div>
    <div>
        <span>Total Sales</span>
        <div>
            <strong>$566.90</strong>
            <span>+234</span>
        </div>
    </div>
</BoxWrapper>
<BoxWrapper >
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
       <IoBagHandle className='text-2x text-white'/> 
    </div>
    <div>
        <span>Total Sales</span>
        <div>
            <strong>$566.90</strong>
            <span>+234</span>
        </div>
    </div>
</BoxWrapper>
<BoxWrapper >
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
       <IoBagHandle className='text-2x text-white'/> 
    </div>
    <div>
        <span>Total Sales</span>
        <div>
            <strong>$566.90</strong>
            <span>+234</span>
        </div>
    </div>
</BoxWrapper>
<BoxWrapper >
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
       <IoBagHandle className='text-2x text-white'/> 
    </div>
    <div className='pl-4'>
        <span className='text-sm text-gray-500 font-light'>Total Sales</span>
        <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>$566.90</strong>
            <span className='text-sm text-green-500 pl-2'>+234</span>
        </div>
    </div>
</BoxWrapper>

    </div>

  )
}

function BoxWrapper({children}){
   return  <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}
