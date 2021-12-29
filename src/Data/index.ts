import photo1 from '../assets/images/product1.webp'
import photo2 from '../assets/images/product2.webp'
import photo3 from '../assets/images/product3.webp'
import photo4 from '../assets/images/product4.webp'
import photo5 from '../assets/images/product5.webp'

export interface IProduct {
   id: number
   name: string
   description: string
   color: string
   size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
   image: any
   price: number
}

export const products: IProduct[] = [
   {
      id: 1,
      name: 'Fleece Turtle Neck',
      description: 'SHIRT BLUE',
      color: 'RED',
      size: 'M',
      image: photo1,
      price: 10,
   },
   {
      id: 2,
      name: 'Strect Lembut Crew Neck',
      description: 'SHIRT BLUE',
      color: 'RED',
      size: 'M',
      image: photo2,
      price: 18,
   },
   {
      id: 3,
      name: 'Waffle Crew Neck Lengan Panjang',
      description: 'SHIRT BLUE',
      color: 'RED',
      size: 'M',
      image: photo3,
      price: 20,
   },
   {
      id: 4,
      name: 'Oversized Garis Lengang Panjang',
      description: 'SHIRT BLUE',
      color: 'RED',
      size: 'M',
      image: photo4,
      price: 30,
   },
   {
      id: 5,
      name: 'Crew Neck Lengan Panjang',
      description: 'SHIRT BLUE',
      color: 'RED',
      size: 'M',
      image: photo5,
      price: 40,
   },
]
