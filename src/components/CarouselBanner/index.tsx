import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'

interface Props {}

const Overlay = () => (
   <div
      className='absolute '
      style={{
         height: '90vh',
         width: 'auto',
         backgroundColor: 'black',
         opacity: '0.4',
         top: 0,
         right: 0,
         left: 0,
         zIndex: 99,
         color: 'white',
      }}
   />
)

const CarouselBanner = (props: Props) => {
   return (
      <Carousel
         autoPlay={true}
         swipeable={true}
         interval={4000}
         infiniteLoop={true}
         dynamicHeight={true}
         // centerMode={true}
         emulateTouch={true}
         showStatus={false}
         showThumbs={false}
      >
         <div className='relative'>
            <Overlay />
            <img
               className='bg-cover'
               style={{ maxHeight: '90vh' }}
               src={banner1}
               alt='banner1'
            />
         </div>
         <div>
            <Overlay />
            <img
               className='bg-cover'
               src={banner2}
               alt='banner2'
               style={{ maxHeight: '90vh' }}
            />
         </div>
      </Carousel>
   )
}

export default CarouselBanner
