import React from 'react'

export default function Header() {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center'>
    <div><input type='text' placeholder='search....' className='text-sm focus:outline-none active:outline-none h-10 w-{24rem}' /></div>
    <div>Side Buttons</div>
    </div>
  )
}
