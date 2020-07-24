import Layout, { siteTitle } from '../components/layout/layout';
import Head from 'next/head';
import { motion } from 'framer-motion';

const pageName = 'Page Two';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} ❘ ${pageName}`}</title>
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <section className='container vh'>
          <h1>General</h1>
          <div className='scrolling-wrapper'>
            <div className='card'>
              <h2>Card</h2>
            </div>
            <div className='card'>
              <h2>Card</h2>
            </div>
            <div className='card'>
              <h2>Card</h2>
            </div>
            <div className='card'>
              <h2>Card</h2>
            </div>
            <div className='card'>
              <h2>Card</h2>
            </div>
            <div className='card'>
              <h2>Card</h2>
            </div>
            <div className='card'>
              <h2>Card</h2>
            </div>
            <div className='card'>
              <h2>Card</h2>
            </div>
            <div className='card'>
              <h2>Card</h2>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
