import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout/layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
const pageName = 'Contact';

export default function Page() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }

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
          <h1>Contact</h1>
          <button onClick={handleToggle}>{toggle ? 'CLOSE' : 'VIEW CV'}</button>
          {toggle ? (
            <embed
              style={{ margin: '40px 0px' }}
              src='../images/julesodea-cv.pdf'
              width='100%'
              height='100%'
            />
          ) : (
            ''
          )}
        </section>
      </motion.div>
    </Layout>
  );
}
