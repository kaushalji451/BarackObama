import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const InvocedPage = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <SEO title="Involved | Barack Obama" description="Welcome to the official Obama Foundation InvolvedPage." />
      <motion.section
        className="py-16 px-4 bg-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-sky-400 mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Volunteer With Us
          </motion.h2>

          <motion.div
            className="mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1641057324798-c05769de628a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Diverse group of happy volunteers planting trees in a community park"
              className="rounded-lg shadow-lg mx-auto mb-8 w-[500px] h-[400px]"
            />
          </motion.div>

          <motion.p
            className="text-lg text-slate-50 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Volunteers are the heart of our organization. By donating your time and skills,
            you can make a real difference in our community. Whether you're passionate about
            mentoring youth, helping the environment, or supporting local families, we have
            opportunities that match your interests and schedule. Join our team of dedicated
            volunteers and help us create positive change together!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/volunteersignup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Sign Up to Volunteer
            </Link>
            <Link
              to="/about"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition duration-300 border-2 border-blue-600 shadow-lg"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-slate-50">
              Questions? <Link to="/contactus" className="text-blue-600 hover:underline">Contact our volunteer team</Link>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default InvocedPage;
