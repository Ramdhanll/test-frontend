import { ICart, IWishlist } from '../../interfaces/ICart'

interface ICartState {
   carts: ICart[]
   wishlists: IWishlist[]
}

interface ICartActions {
   type:
      | 'add_item'
      | 'minus_item'
      | 'remove_item'
      | 'add_wishlist'
      | 'remove_wishlist'
      | 'clear_carts'
      | 'clear_all_item'
   payload: ICart
}

const cartFromLocalStorage: any = localStorage.getItem('carts')

export const initialCartState: ICartState = {
   carts: cartFromLocalStorage ? JSON.parse(cartFromLocalStorage).carts : [],
   wishlists: cartFromLocalStorage
      ? JSON.parse(cartFromLocalStorage).wishlists
      : [],
}

export default function cartReducer(
   state: ICartState = initialCartState,
   action: ICartActions
) {
   let exist = false
   switch (action.type) {
      case 'add_item':
         // cari item berdasarkan id, jika ada +1 qty
         state.carts.find((cart, i) => {
            if (cart.product.id === action.payload.product.id) {
               state.carts[i].qty += 1
               exist = true
               return true
            }

            return false
         })

         // jika tidak push item baru ke cart
         if (!exist) {
            state.carts.push(action.payload)
         }
         localStorage.setItem('carts', JSON.stringify(state))
         return { ...state }
      case 'minus_item':
         // cari item berdasarkan id, jika ada +1 qty
         state.carts.find((cart, i) => {
            if (cart.product.id === action.payload.product.id) {
               state.carts[i].qty -= 1
               return true
            }

            return false
         })

         localStorage.setItem('carts', JSON.stringify(state))
         return { ...state }

      case 'remove_item':
         state.carts.find((cart, i) => {
            if (cart.product.id === action.payload.product.id) {
               state.carts.splice(i, 1)
               return true
            }

            return false
         })

         localStorage.setItem('carts', JSON.stringify(state))
         return { ...state }
      case 'clear_carts':
         state.carts = []
         localStorage.setItem('carts', JSON.stringify(state))

         return { ...state }
      case 'add_wishlist':
         state.wishlists.find((cart, i) => {
            if (cart.product.id === action.payload.product.id) {
               exist = true
               return true
            }
            return false
         })

         // jika tidak push item baru ke cart
         if (!exist) {
            state.wishlists.push(action.payload)
         }
         localStorage.setItem('carts', JSON.stringify(state))
         return { ...state }

      case 'remove_wishlist':
         state.wishlists.find((cart, i) => {
            if (cart.product.id === action.payload.product.id) {
               state.wishlists.splice(i, 1)
               return true
            }

            return false
         })

         localStorage.setItem('carts', JSON.stringify(state))
         return { ...state }
      case 'clear_all_item':
         return {
            ...state,
            ...(state.carts = []),
            ...(state.wishlists = []),
         }
      default:
         return { ...state }
   }
}
