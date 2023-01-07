import React from 'react'

interface Props{
    Icon: any
    active: boolean
}
function HeaderIcon({Icon, active} : Props) {
  return (
     <div className='flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group'>
        <Icon className={`h-5 text-center sm:h-7 group-hover:text-blue-500 text-gray-500 ${active && "text-blue-500"}`}></Icon>
    </div>
  ) 
}

export default HeaderIcon