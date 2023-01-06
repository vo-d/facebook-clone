import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <div>Header</div>


        {/*  left  */}
        <Image src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt={''} width={40} height={40} layout='fixed'></Image>
        {/* center */} 

        {/* right */} 
    </div>
    
  )
}

export default Header