import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Progress = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <SEO title="Progress | Barack Obama" description="Welcome to the official Obama Foundation progressPage." />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section 1: Header */}
        <motion.section
          className="py-16 px-4 bg-gray-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Our Progress</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From the White House to the world, we’re building a legacy of hope, leadership, and lasting change through the Obama Foundation.
          </p>
        </motion.section>

        {/* Section 2: Highlights */}
        <motion.section
          className="py-12 px-4 bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Presidential Highlights (2009–2017)</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-200">
              <li>✅ Passed the Affordable Care Act (Obamacare)</li>
              <li>✅ Ended the War in Iraq</li>
              <li>✅ Legalized same-sex marriage nationwide</li>
              <li>✅ Captured and eliminated Osama bin Laden</li>
              <li>✅ Signed the Paris Climate Agreement</li>
              <li>✅ Created over 15 million jobs during recovery</li>
            </ul>
          </div>
        </motion.section>

        {/* Section 3: Stats */}
        <motion.section
          className="py-16 px-4 bg-gray-900 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-8">Obama Foundation by the Numbers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '140+', label: 'Emerging Leaders Trained Globally' },
              { number: '300M+', label: 'People Reached Through Initiatives' },
              { number: '30+', label: 'Countries Impacted' },
              { number: '1 Vision', label: 'To Inspire, Empower, and Connect People' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="px-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <h4 className="text-4xl font-bold text-blue-300">{item.number}</h4>
                <p className="text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Recent Projects */}
        <motion.section
          className="py-16 px-4 bg-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Recent Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'My Brother’s Keeper Alliance',
                  desc: 'Helping boys and young men of color reach their full potential.'
                },
                {
                  title: 'Obama Presidential Center (Chicago)',
                  desc: 'A hub for civic engagement, youth leadership, and community transformation.'
                }
              ].map((project, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-700 p-6 rounded-lg shadow-md"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <h4 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h4>
                  <p className="text-gray-300">{project.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: CTA */}
        <motion.section
          className="py-12 px-4 bg-gray-900 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-2xl font-bold text-blue-400 mb-4">Join the Movement</h4>
          <p className="text-gray-300 mb-6">Support the Obama Foundation and help shape the next generation of leaders.</p>
          <Link
            to="/invoced"
            className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-full font-semibold transition transform hover:scale-105"
          >
            Get Involved
          </Link>
        </motion.section>
      </motion.div>
    </>
  );
};

export default Progress;
