import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import CartItem from '../../components/Cart/CartItem'
import { ICart } from '../../interfaces/ICart'
import {
   addItem,
   addWishlist,
   clearCarts,
   minusItem,
   removeItem,
   removeWishlist,
} from '../../redux'
import { RootState } from '../../redux/rootReducer'

interface Props {}

const Cart = (props: Props) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { carts } = useSelector((state: RootState) => state.cart)
   const [discount, setDiscount] = useState<number>(0)
   const [totalPrice, setTotalPrice] = useState<number>(0)

   useEffect(() => {
      const price = carts.reduce(
         (total, num) => total + num.product.price * num.qty,
         0
      )
      const totalDiscount = (price * discount) / 100
      const totalPrice = price - totalDiscount

      setTotalPrice(totalPrice)

      return () => {
         setTotalPrice(0)
      }
   }, [carts, carts.length, discount])

   const handleClickAdd = (cart: ICart) => {
      dispatch(addItem(cart))
   }

   const handleClickMinus = (cart: ICart) => {
      dispatch(minusItem(cart))
   }

   const handleClickRemove = (cart: ICart) => {
      dispatch(removeItem(cart))
   }

   const handleChangeDiscount = (discount: number) => {
      setDiscount(discount)
   }

   const handleAddToWishlist = (cart: ICart) => {
      dispatch(addWishlist(cart))
   }

   const handleRemoveWishlist = (cart: ICart) => {
      dispatch(removeWishlist(cart))
   }

   const handleCheckout = () => {
      alert('checkout has been successful, thank you')
      dispatch(clearCarts())
      navigate('/')
   }

   if (!carts.length) {
      return (
         <div className='h-screen flex justify-center items-center flex-col gap-3'>
            <h1>empty cart go back for shopping</h1>
            <NavLink to='/'>
               <button className='bg-blue-300 text-white px-4 py-2 rounded-md'>
                  Go Back
               </button>
            </NavLink>
         </div>
      )
   }
   return (
      <div>
         <nav className='h-14 bg-gray-200 flex justify-between items-center px-10'>
            <h1 className='font-bold text-gray-600 align-middle text-md md:text-xl lg:text-2xl'>
               Shopping Cart
            </h1>
            <NavLink to='/'>
               <button className='py-2 px-4 text-blue-400'>Back</button>
            </NavLink>
         </nav>

         <main className='flex gap-5 p-5 lg:p-20 flex-col md:flex-col lg:flex-row lg:gap-9'>
            <section
               id='detail_cart'
               className='bg-white shadow-md rounded p-5 h-max'
            >
               <h2 className='font-semibold text-gray-500 text-md md:text-lg lg:text-xl text-left'>
                  Cart {`(${carts.length} items)`}
               </h2>
               <div
                  className='flex justify-between items-start flex-col pt-3 gap-7 h-max '
                  // style={{ height: 'auto' }}
               >
                  {carts.map((cart, i) => (
                     <React.Fragment key={i}>
                        <CartItem
                           cart={cart}
                           handleClickAdd={handleClickAdd}
                           handleClickMinus={handleClickMinus}
                           handleClickRemove={handleClickRemove}
                           handleAddToWishlist={handleAddToWishlist}
                           handleRemoveWishlist={handleRemoveWishlist}
                        />
                        {carts.length !== i + 1 && <hr className='w-full' />}
                     </React.Fragment>
                  ))}
               </div>
            </section>
            <section
               id='total_amount'
               className='flex flex-col  w-full lg:w-3/12 gap-3'
            >
               <div className='bg-white shadow-md rounded p-5 h-max  '>
                  <h2 className='font-semibold text-gray-500 text-md md:text-lg lg:text-xl text-left'>
                     The total amount of
                  </h2>
                  <div className='flex flex-col gap-2 mt-3'>
                     <div className='flex justify-between'>
                        <p className='' style={{ color: '#AAAFBF' }}>
                           Temporary amount
                        </p>
                        <p className='' style={{ color: '#AAAFBF' }}>
                           $
                           {carts.reduce(
                              (total, num) =>
                                 total + num.product.price * num.qty,
                              0
                           )}
                        </p>
                     </div>
                     <div className='flex justify-between'>
                        <p className='' style={{ color: '#AAAFBF' }}>
                           Shipping
                        </p>
                        <p className='' style={{ color: '#AAAFBF' }}>
                           Gratis
                        </p>
                     </div>
                     {discount ? (
                        <div className='flex justify-between'>
                           <p className='' style={{ color: '#AAAFBF' }}>
                              Discount {discount}%
                           </p>
                           <p className='' style={{ color: '#AAAFBF' }}>
                              $
                              {(carts.reduce(
                                 (total, num) =>
                                    total + num.product.price * num.qty,
                                 0
                              ) *
                                 discount) /
                                 100}
                           </p>
                        </div>
                     ) : null}
                     <hr />
                     <div className='flex justify-between items-center'>
                        <p
                           className='text-left font-semibold'
                           style={{ color: '#8A98A1' }}
                        >
                           The total amount of <br /> (including VAT)
                        </p>
                        <p
                           className='font-semibold'
                           style={{ color: '#8A98A1' }}
                        >
                           ${totalPrice}
                        </p>
                     </div>
                     <button
                        onClick={handleCheckout}
                        className='font-medium mt-3 py-2 px-5 rounded-lg bg-blue-600 border-solid border text-white text-sm hover:bg-blue-500 active:bg-blue-400 '
                     >
                        GO TO CHECKOUT
                     </button>
                  </div>
               </div>
               <div className=' px-3 mb-6 md:mb-0 bg-white shadow-md rounded  h-max'>
                  <div className='relative'>
                     <select
                        className='block appearance-none w-full bg-white   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        id='grid-state'
                        onChange={(e) =>
                           handleChangeDiscount(Number(e.target.value))
                        }
                        value={discount}
                        defaultValue={discount}
                     >
                        <option selected value={0} defaultValue={0}>
                           Add a discount code [optional]
                        </option>
                        <option value={10}>Winter 10%</option>
                        <option value={20}>End year 20%</option>
                     </select>
                     <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <svg
                           className='fill-current h-4 w-4'
                           xmlns='http://www.w3.org/2000/svg'
                           viewBox='0 0 20 20'
                        >
                           <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </div>
   )
}

export default Cart
