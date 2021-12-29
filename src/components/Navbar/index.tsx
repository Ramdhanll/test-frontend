import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../../redux/rootReducer'

interface INavbar {}

const Navbar: FC<INavbar> = () => {
   const { carts } = useSelector((state: RootState) => state.cart)

   return (
      <nav className='h-14 bg-gray-200 flex justify-between items-center px-10'>
         <h1 className='text-gray-600 font-bold text-xl'>Shopping</h1>
         <NavLink to='cart'>
            <button> {carts.length} Keranjang</button>
         </NavLink>
      </nav>
   )
}

export default Navbar
