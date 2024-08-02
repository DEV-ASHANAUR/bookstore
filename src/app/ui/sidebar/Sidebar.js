import React from 'react'
import NavLinks from './NavLinks'
import {} from "@heroicons/react/solid"
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid'
const Sidebar = () => {
  return (
    <div className='flex flex-wrap flex-row gap-2 md:flex-col md:grow px-4 py-3 md:py-0 md:px-0 md:sticky md:top-[88px] md:max-w-[190px]'>
        <NavLinks />
        <form>
            <button className='flex h-[48px] gap-2 p-3 rounded-md md:rounded-none bg-gray-50 hover:text-white hover:bg-red-600 md:px-5 justify-center items-center transition-all'>
                <ArrowLeftStartOnRectangleIcon className='w-6' />
                <p className='hidden md:block'>Sign Out</p>
            </button>
        </form>
    </div>
  )
}

export default Sidebar