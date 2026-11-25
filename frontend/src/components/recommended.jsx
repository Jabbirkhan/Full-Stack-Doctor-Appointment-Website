import React, { useContext, useMemo } from 'react'
import { MdChevronLeft, MdChevronRight} from "react-icons/md";
import { Link } from 'react-router-dom';
import { Context } from '../context/context';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Recommended = ({name, data}) => {

    const { currency } = useContext(Context);

    const scrollToTop = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }

    return (
        <section>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recommended {name}</h2>
                <div className="flex gap-2">
                    <button className="p-2 border rounded-full custom-prev">
                        <MdChevronLeft />
                    </button>
                    <button className="p-2 border rounded-full custom-next">
                        <MdChevronRight />
                    </button>
                </div>
            </div>

            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                slidesPerGroup={1}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev'
                }}
                breakpoints={{
                    0: { slidesPerView: 1 }, // phones ≥ 260px
                    480: { slidesPerView: 2 }, // tablets ≥ 640px
                    768: { slidesPerView: 3 }, // tablets ≥ 640px
                    1024: { slidesPerView: 4 }  // laptops ≥ 1024px
                }}
                modules={[Navigation]}
            >
                    {data.map((d, i) => (
                        <SwiperSlide key={i}>
                            <Link to={`/doctor/${d._id}`} onClick={scrollToTop} className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300">
                                <div className="h-48 sm:h-52 rounded-xl mb-3">
                                    <img src={d.image} className='w-full h-full object-cover' alt={d.name.slice(0, 10)} />
                                </div>
                                <div className='px-5'>
                                    <h3 className="font-bold">{d.name}</h3>
                                    <p className="text-purple-600 text-sm">{d.speciality}</p>
                                </div>
                                <div className="flex justify-between my-2 px-5">
                                    <span>⭐ {d.experience}</span>
                                    <span className="text-purple-600 font-bold">{currency}{d.fees}</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                
            </Swiper>

        </section>
    )
}

export default Recommended
