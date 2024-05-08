import React from 'react'
import "./FeaturesBooks.css"
import TitleTypeone from '../../UI/TitleTypeOne/TitleTypeOne'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';
import { featuredBooksData } from '../../Data/Data'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";


const breakpoints = {
    1024: {
        // width: 576,
        slidesPerView: 4,
        spaceBetweenSlides: 30,
    },
    768: {
        // width: 768,
        spaceBetweenSlides: 20,
        slidesPerView: 3,
    },
    480: {
        // width: 480,
        spaceBetweenSlides: 10,
        slidesPerView: 2,
    },
    0: {
        // width: 0,
        spaceBetweenSlides: 0,
        slidesPerView: 1,
    }
}


export default function FeaturesBooks() {
    return (
        <section className='Featured'>
            <div className='container features-book-container'>
                <TitleTypeone TitleTop={'Some quality items'} Title={'Featured Books'} />


                <Swiper
                    spacebetween={50}
                    slidesPerView={4}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Pagination]}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    breakpoints={breakpoints}
                >
                    {
                        featuredBooksData.map(({ img, imgLlink, name, nameLink, writer, price }, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="featurebook-box">
                                        <Link to={imgLlink} className='featurebook' >
                                            <img src={img} alt="" />
                                        </Link>
                                        <div className="featurebook-info">
                                            <Link to={nameLink}>
                                                <h4>{name}</h4>
                                            </Link>
                                            <div><small>{writer}</small></div>
                                            <h5><span>{price}</span></h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                    <div className="feature-border container"></div>

                    <div className="swiper-pagination"></div>

                    <Link to='*' className='btn feature-btn'> View all products <FaArrowRightLong /> </Link>
                </Swiper>

            </div>
        </section>
    )
}
