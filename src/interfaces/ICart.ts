import { IProduct } from './../Data/index'

export interface ICart {
   product: IProduct
   qty: number
}

export interface IWishlist {
   product: IProduct
}

export const DEFAULT_CART: ICart = {
   product: {
      id: 0,
      image: '',
      name: '',
      price: 0,
      color: '',
      description: '',
      size: 'M',
   },
   qty: 0,
}
