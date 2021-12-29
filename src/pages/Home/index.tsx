import React from 'react'
import CarouselBanner from '../../components/CarouselBanner'
import CarouselProduct from '../../components/CarouselProduct'
import Navbar from '../../components/Navbar'
import { IProduct } from '../../Data'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux'

const Home = () => {
   const dispatch = useDispatch()

   const successAddToCart = () => {
      alert('item added successfully')
   }

   const handleAddToCart = (product: IProduct) => {
      dispatch(addItem({ product, qty: 1 }))
      successAddToCart()
   }

   return (
      <div
         className='text-blue-600 h-screen'
         style={{ backgroundColor: '#FBFBFB' }}
      >
         <Navbar />

         <div className='relative flex items-center justify-center'>
            <CarouselBanner />
            <div
               className='absolute flex items-center justify-center mt-7 md:mt-31 lg:mt-40'
               style={{
                  top: 0,
                  zIndex: 99,
                  color: 'white',
                  flexDirection: 'column',
               }}
            >
               <h1 className='text-white font-bold opacity-100 text-md md:text-4xl lg:text-5xl '>
                  Winter Season Sale
               </h1>
               <p className='mt-5 text-sm md:text-lg lg:text-xl w-8/12'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci veritatis doloremque fuga! Consequatur nihil fuga!
                  Consequatur nihil
               </p>
               <a
                  href='#main'
                  className='bg-yellow-500 mt-5 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded'
               >
                  Shop Now
               </a>
            </div>
         </div>

         <main id='main' className='mt-8'>
            <CarouselProduct handleAddToCart={handleAddToCart} />
         </main>

         <footer
            className='h-20 mt-3 flex justify-center items-center'
            style={{ backgroundColor: '#FBFBFB' }}
         >
            <p className='text-sm text-gray-400'>Thank you</p>
         </footer>
      </div>
   )
}

export default Home
