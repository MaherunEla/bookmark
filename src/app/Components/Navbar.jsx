import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
  return (
    <nav className='relative container p-10 '>
        <div className='flex items-center justify-between'>
            {/* logo */}
            <div>
                <Image
                className=""
                src="/assets/images/Group 11.png"
                width={149}
                height={50}
                />
            </div>
            {/* list items */}

            <div className='hidden space-x-6 md:flex '> 
                <Link href="/" className='hover:text-red-500'>FEATURES</Link>
                <Link href="/" className='hover:text-red-500'>PRICING</Link>
                <Link href="/" className='hover:text-red-500'>CONTACT</Link>
                <button className='-mt-3 px-8 py-2 border-2 border-red-500 rounded bg-red-500 hover:bg-white'> <Link href="/">LOGIN</Link></button>
              
            </div>
           
           
             {/* menu icon */}
        <div className='flex md:hidden'>
            <AiOutlineMenu />
        </div>

        </div>
       

    </nav>
  )
}

export default Navbar