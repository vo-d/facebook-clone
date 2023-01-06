import React from 'react'
import Image from 'next/image'
import { BellIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewColumnsIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'
import { FlagIcon, PlayIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'



function Header() {
  return (
    <div className=' flex items-center'>

        {/*  left  */}
        <Image src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt={''} width={40} height={40} ></Image>
        <div className=' flex ml-2 items-center rounded-full bg-gray-100 p-2'>
            <MagnifyingGlassIcon className=' h-6'></MagnifyingGlassIcon>
            <input className=' flex ml-2 items-center bg-transparent' type="text" placeholder='Search Facebook' />
        </div>
        {/* center */} 

        {/* right */} 
    </div>
    
  )
}

export default Header 