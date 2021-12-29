import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { ICart } from '../../../interfaces/ICart'
import { RootState } from '../../../redux/rootReducer'

interface ICartItem {
   cart: ICart
   handleClickAdd: (cart: ICart) => void
   handleClickMinus: (cart: ICart) => void
   handleClickRemove: (cart: ICart) => void
   handleAddToWishlist: (cart: ICart) => void
   handleRemoveWishlist: (cart: ICart) => void
}

const CartItem: FC<ICartItem> = ({
   cart,
   handleClickAdd,
   handleClickMinus,
   handleClickRemove,
   handleAddToWishlist,
   handleRemoveWishlist,
}) => {
   const { wishlists } = useSelector((state: RootState) => state.cart)

   const checkWishlist = (id: number) => {
      const exist = wishlists.some((wislist) => wislist.product.id === id)
      return exist
   }

   return (
      <div
         className='flex gap-4 justify-between items-start w-full flex-col lg:flex-row '
         style={{ height: '100%' }}
      >
         {/* image */}
         <div className='shadow-sm rounded-lg m-auto'>
            <img
               className='rounded-lg'
               src={cart.product.image}
               alt={cart.product.name}
               width='220px'
               height='220px'
            />
         </div>

         {/* detail item */}
         <div className='flex justify-between flex-col gap-3 w-full'>
            <div className='flex justify-between w-full gap-5 items-start'>
               <div>
                  <div className='flex flex-col gap-1 items-start'>
                     <h3
                        className='font-semibold text-sm text-left md:text-md lg:text-lg'
                        style={{ color: '#8A98A1' }}
                     >
                        {cart.product.name}
                     </h3>
                     <p
                        className='text-xs text-gray-300 md:text-sm lg:text-md'
                        style={{ color: '#AAAFBF' }}
                     >
                        {cart.product.description}
                     </p>
                     <p
                        className='text-xs text-gray-300 md:text-sm lg:text-md'
                        style={{ color: '#AAAFBF' }}
                     >
                        COLOR: {cart.product.color}
                     </p>
                     <p
                        className='text-xs text-gray-300 md:text-sm lg:text-md'
                        style={{ color: '#AAAFBF' }}
                     >
                        SIZE: {cart.product.size}
                     </p>
                  </div>
               </div>

               {/* qty */}
               <div className='flex flex-col justify-between h-auto items-center '>
                  <div>
                     <div className='flex justify-center'>
                        <button
                           className='font-medium py-1 px-5 rounded-l border-gray-300 border-solid border hover:bg-gray-500 hover:text-gray-100 active:bg-gray-400 '
                           onClick={() => handleClickMinus(cart)}
                           disabled={cart.qty === 1}
                        >
                           -
                        </button>
                        <p className='font-normal py-1 px-5  border-gray-300 border-solid border   '>
                           {cart.qty}
                        </p>
                        <button
                           className='font-medium py-1 px-5 rounded-r border-gray-300 border-solid border hover:bg-gray-500 hover:text-gray-100 active:bg-gray-400 '
                           onClick={() => handleClickAdd(cart)}
                        >
                           +
                        </button>
                     </div>
                     <p className='mt-1 text-sm text-gray-400'>
                        (Note, {cart.qty} piece)
                     </p>
                  </div>
               </div>
            </div>

            {/* button remove & wishlist */}
            <div className='flex justify-between items-center'>
               <div className='flex gap-2 md:gap-3 lg:gap-6'>
                  <div>
                     <button
                        className='text-xs md:text-sm lg:text-md'
                        style={{ color: '#8A98A1' }}
                        onClick={() => handleClickRemove(cart)}
                     >
                        <i className='fas fa-trash mr-2'></i>REMOVE ITEM
                     </button>
                  </div>
                  <div>
                     <button
                        style={{ color: '#8A98A1' }}
                        className='text-xs md:text-sm lg:text-md'
                        onClick={() =>
                           checkWishlist(cart.product.id)
                              ? handleRemoveWishlist(cart)
                              : handleAddToWishlist(cart)
                        }
                     >
                        <i
                           className={`far fa-heart mr-2`}
                           style={
                              checkWishlist(cart.product.id)
                                 ? { color: 'pink' }
                                 : { color: '#8A98A1' }
                           }
                        ></i>
                        {checkWishlist(cart.product.id)
                           ? 'REMOVE FROM WISH LIST'
                           : 'MOVE TO WISH LIST'}
                     </button>
                  </div>
               </div>
               <div className='font-bold' style={{ color: '#8A98A1' }}>
                  ${cart.product.price}
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartItem
