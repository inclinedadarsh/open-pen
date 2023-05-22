import React from 'react'

import LogoMark from '../assets/logo-mark.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center py-6'>
      <Link to="/" className="flex gap-4 text-lg md:text-xl font-semibold items-center">
        <img src={LogoMark} alt="Open Pen Logo" className='w-4 md:w-6' />
        <span className=''>/</span>
        <span>Open Pen</span>
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/login" className='px-7 py-3 font-medium border-black border-2 hover:bg-black hover:text-white'>Login</Link>
        <Link to="/signup" className='px-7 py-3 font-medium bg-black text-white border-black border-2 hover:bg-white hover:text-black'>Sign up</Link>
      </div>
    </nav>
  )
}

export default Nav