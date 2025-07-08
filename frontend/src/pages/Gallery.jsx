import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import categories from '../components/Images';
import SEO from "../components/SEO"
const Gallery = () => {
   
    return (
      <>
        <SEO title="Home | Barack Obama" description="Welcome to the official Obama Foundation homepage." />
      
        <div className="min-h-screen bg-slate-800 text-white py-10 px-4 md:px-8">
            <motion.h2
                className="text-4xl font-bold mb-10 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Gallery
            </motion.h2>

            {categories.map((category, index) => (
                <motion.div
                    key={`category-${index}`}
                    className="mb-16 border border-slate-600 rounded-lg p-4 bg-slate-700 shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center text-blue-300">
                        {category.title}
                    </h3>
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {category.images.map((image, imgIndex) => (
                            <SwiperSlide key={`img-${index}-${imgIndex}`}>
                                <div className="h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl border border-slate-600 bg-slate-900 shadow-md hover:shadow-blue-500 transition duration-300">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            ))}
        </div>
        </>
    );
};

export default Gallery;
