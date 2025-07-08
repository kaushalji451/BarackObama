import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};


// Reusable timeline item with animation
const TimelineItem = ({ year, title, description, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      className="flex max-md:flex-col gap-20 max-md:gap-2"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-white bg-[#3498db] font-medium rounded-lg text-md px-7 py-2.5 me-2 mb-2 h-11 w-23">
        {year}
      </div>
      <div className="bg-white shadow-md w-full py-4 px-4 rounded-xl">
        <h3 className="font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};
export default TimelineItem;