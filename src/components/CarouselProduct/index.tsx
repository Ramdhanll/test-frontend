import React, { FC } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { IProduct, products } from '../../Data'

const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
   },
}

interface ICarouselProduct {
   handleAddToCart: (product: IProduct) => void
}

const CarouselProduct: FC<ICarouselProduct> = ({ handleAddToCart }) => {
   return (
      <Carousel
         swipeable={true}
         draggable={false}
         showDots={true}
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
         // autoPlay={props.deviceType !== 'mobile' ? true : false}
         autoPlay={true}
         autoPlaySpeed={1000}
         keyBoardControl={true}
         customTransition='all .5'
         transitionDuration={1000}
         containerClass='carousel-container'
         removeArrowOnDeviceType={['tablet', 'mobile']}
         dotListClass='custom-dot-list-style'
         // itemClass='carousel-item-padding-40-px'
         itemClass='p-5'
      >
         {products.map((product) => (
            <div key={product.id}>
               <img
                  className='bg-cover'
                  style={{ maxHeight: '90vh' }}
                  src={product.image}
                  alt='banner1'
               />
               <div className='pb-3'>
                  <p className='font-bold text-gray-400 pt-2'>{product.name}</p>
                  <p className='font-bold text-yellow-400 pt-1'>
                     ${product.price}
                  </p>
                  <button
                     onClick={() => handleAddToCart(product)}
                     className='bg-yellow-500 mt-1 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded'
                  >
                     Add to cart
                  </button>
               </div>
            </div>
         ))}
      </Carousel>
   )
}

export default CarouselProduct
