import React from 'react'
import './Header.css'
import { headerBooks } from '../../Data/Data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
// import { GoArrowRight } from "react-icons/go"
// import { GoArrowLeft } from "react-icons/go"
import headerShape from '../../assets/header-shape.svg'


export default function Header() {

  const swiperRef = React.useRef(null);

  const goNext = () => {
    console.log('Next Clicked')
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    console.log('Prev Clicked')
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };


  return (
    <header>
      <div className="header-container">

        {/* Arrows */}
        <div className="button-prev-slide" onClick={goPrev}>
          &lt;
        </div>
        <div className="button-next-slide" onClick={goNext}>
          &gt;
        </div>


        <Swiper
          spacebetween={50}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Navigation, Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={
            {
              preEl: '.button-prev-slide',
              nextEl: '.button-next-slide',
            }
          }
        >
          {/* SwiperSlide */}
          {
            headerBooks.map(({ title, info, img, btnLink }, index) => {
              return (

                <SwiperSlide key={index}>
                  <div className='header-wrapper container'>

                    <div className='header-left'>
                      <h1>{title}</h1>
                      <p dangerouslySetInnerHTML={{ __html: info }}></p>
                      <Link className='btn btn-border' to={btnLink}>Learn more</Link>
                    </div>

                    <div className='header-right'>
                      <img src={img} alt="" />
                    </div>

                  </div>
                </SwiperSlide>
              )
            })
          }

          {/* Arrows */}
          {/* <div className='slider-button'>
            <div className='button-prev-slide slide-button' onClick={() => console.log('I am working')}><GoArrowLeft /></div>
            <div className='button-next-slide slide-button'><GoArrowRight /></div>
          </div> */}


          {/*------------------- Pagination --------------*/}
          <div className='container'>
            <div className='swiper-pagination'></div>
          </div>
        </Swiper>

        {/* ---------------- Header Shape ------------------------- */}
        <div className='header-shape'>
          <img src={headerShape} className='header s' alt="" />
        </div>
      </div>
    </header>
  )
}



// npm i swiper
// npm i react-icons