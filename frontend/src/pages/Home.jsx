import React, { useState, useEffect } from 'react'
import Carousel from '../components/HomeCursole'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

const Home = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <>
      <SEO title="Home | Barack Obama" description="Welcome to the official Obama Foundation homepage." />
      <div className='bg-slate-700 pb-5'>

        {showIcon && (
          <div className='fixed right-5 bottom-5 z-50'>
            <lord-icon
              src="https://cdn.lordicon.com/wwluxohy.json"
              trigger="hover"
              className="w-[70px] h-[70px] max-md:h-[40px] max-md:w-[40px]"
              onClick={handleScrollToTop}
            />
          </div>
        )}

        {/* Welcome Section */}
        <div className="h-screen bg-[url('/src/assets/obama-bg2.png')] bg-no-repeat bg-center sm:bg-[length:110%_110%] md:bg-[length:120%_120%] lg:bg-[length:130%_130%] xl:bg-[length:140%_140%]">
          <motion.div
            className='flex h-full justify-center items-center'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='text-center mt-10'>
              <p className='text-2xl font-bold flex justify-center'>
                <span className='w-2/3 text-slate-300 '>
                  Welcome to the Office of Barack and Michelle Obama
                </span>
              </p>
              <motion.p
                className='text-sky-500 font-serif pt-5 max-md:text-3xl min-md:text-6xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                We Love You Back
              </motion.p>
              <Link to="/about">
                <motion.button
                  type="button"
                  className="text-gray-900 font-semibold bg-white border border-gray-300 hover:bg-gray-200 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
                </Link>
            </div>
          </motion.div>
        </div>

        {/* Carousel Section */}
        <motion.div
          className=''
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className='text-center text-3xl text-white py-5 font-bold'>Our Campaigns</h1>
          <Carousel />
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          className='flex m-10 max-md:m-2 max-h-[450px] rounded-xl p-4 min-md:p-10 bg-white justify-between'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className='overflow-y-scroll min-md:text-center min-md:px-10'
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className='font-bold text-3xl py-2 text-center'>Our Story</h1>
            <p>
              Barack Hussein Obama II was born on August 4, 1961, in Honolulu, Hawaii. His father was from Kenya and his mother from Kansas, making him the son of two very different cultures. Raised mainly by his mother and grandparents, Obama grew up in Hawaii and later lived in Indonesia for a few years.

              He studied at Occidental College in California, then transferred to Columbia University in New York, where he earned a degree in political science. After working in Chicago as a community organizer, he attended Harvard Law School. There, he became the first African American president of the Harvard Law Review, gaining national recognition.

              In 1992, he married Michelle Robinson, a lawyer from Chicago. Together, they became a powerful and admired couple, raising two daughters, Malia and Sasha.

              Obama began his political career in the Illinois State Senate in 1996. In 2004, he was elected to the U.S. Senate and gained national attention with a speech at the Democratic National Convention. His inspiring message of unity and hope laid the groundwork for his presidential campaign.

              In 2008, Obama made history by becoming the first African American president of the United States. He won re-election in 2012. As president, he focused on healthcare reform, passing the Affordable Care Act, and helped guide the country through the economic crisis. He also oversaw the mission that led to the death of terrorist leader Osama bin Laden.

              After leaving office in 2017, Obama continued to inspire people through books, public speaking, and his foundation, which supports young leaders.

              Barack Obama’s story is one of perseverance, hope, and the belief that positive change is possible through unity and action. He remains a global symbol of leadership and progress.
            </p>
          </motion.div>
          <motion.div
            className='max-md:hidden'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"
              alt="Barack Obama"
              className='h-full w-full rounded-xl'
            />
          </motion.div>
        </motion.div>

      </div>
    </>
  )
}

export default Home
