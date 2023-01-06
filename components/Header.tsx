import React from 'react'
import Image from 'next/image'
import { BellIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewColumnsIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'
import { FlagIcon, PlayIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import HeaderIcon from './HeaderIcon'


function Header() {
  return (
    <div className=' sticky top-0 z-50 bg-white flex items-center'>
        <div  className=' flex items-center'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt={''} width={40} height={40} ></Image>
            <div className=' flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <MagnifyingGlassIcon className=' h-6 text-gray-600'></MagnifyingGlassIcon>
                <input className=' flex ml-2 items-center bg-transparent outlien-none placeholder-gray-500 flex-shrink' type="text" placeholder='Search Facebook' />
            </div>
        </div>
        {/*  left  */}
        
        {/* center */} 
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon={HomeIcon}></HeaderIcon>
                <HeaderIcon active={false} Icon={FlagIcon}></HeaderIcon>
                <HeaderIcon active={false} Icon={PlayIcon}></HeaderIcon>
                <HeaderIcon active={false} Icon={ShoppingCartIcon}></HeaderIcon>
                <HeaderIcon active={false} Icon={UserGroupIcon}></HeaderIcon>
            </div>
        </div>
        {/* right */} 
    </div>
    
  )
}

export default Header 