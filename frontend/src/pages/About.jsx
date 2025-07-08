import React, { useEffect, useRef } from 'react';
import './about.css';
import SEO from '../components/SEO';
import { motion, useAnimation, useInView } from 'framer-motion';
import timelineItems from '../components/timeLineitems';
import TimelineItem from '../components/TimelineItem';


const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const fadeInUp = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <SEO title="About | Barack Obama" description="Welcome to the official Obama Foundation about page." />
      <div>
        <header className="bg-slate-800 text-white text-center py-12 px-5">
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"
            alt="Portrait of Barack Obama"
            className="w-48 h-60 rounded-full mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          />
          <motion.h1
            className="text-4xl font-bold mt-5 mb-3 font-serif"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Barack Obama
          </motion.h1>
          <motion.h2
            className="text-xl italic font-serif"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "Change is never easy, but always possible."
          </motion.h2>
        </header>

        <main className="p-5 bg-slate-700">
          <div className="max-w-4xl mx-auto relative flex flex-col gap-4">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                title={item.title}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
