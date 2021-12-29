import { ICart } from '../../interfaces/ICart'
import {
   ADD_ITEM,
   ADD_WISHLIST,
   CLEAR_ALL_ITEM,
   CLEAR_CARTS,
   MINUS_ITEM,
   REMOVE_ITEM,
   REMOVE_WISHLIST,
} from './cartTypes'

export const addItem = (cart: ICart) => {
   return {
      type: ADD_ITEM,
      payload: cart,
   }
}

export const minusItem = (cart: ICart) => {
   return {
      type: MINUS_ITEM,
      payload: cart,
   }
}

export const removeItem = (cart: ICart) => {
   return {
      type: REMOVE_ITEM,
      payload: cart,
   }
}

export const addWishlist = (cart: ICart) => {
   return {
      type: ADD_WISHLIST,
      payload: cart,
   }
}

export const removeWishlist = (cart: ICart) => {
   return {
      type: REMOVE_WISHLIST,
      payload: cart,
   }
}

export const clearCarts = () => {
   return {
      type: CLEAR_CARTS,
   }
}

export const clearAllItem = () => {
   return {
      type: CLEAR_ALL_ITEM,
   }
}
