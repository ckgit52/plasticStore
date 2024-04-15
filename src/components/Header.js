import React from 'react'
import {Link, link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full bg-black text-white flex justify-between p-3 font-semibold'>
        <div>kashi photo</div>
        <div><Link to="/login">login</Link></div>
    </div>
  )
}

export default Header