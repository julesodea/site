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
          <h4>
            Email:{'  '}
            <a href='mailto: jules.odea@gmail.com'>jules.odea@gmail.com</a>
          </h4>
          <h4>
            Github:{'  '}
            <a href='https://github.com/julesodea'>
              https://github.com/julesodea
            </a>
          </h4>
          <h4>
            LinkedIn:{'  '}
            <a href='www.linkedin.com/in/julesodea'>
              www.linkedin.com/in/julesodea
            </a>
          </h4>

          <button className='button' onClick={handleToggle}>
            {toggle ? 'CLOSE' : 'VIEW CV'}
          </button>
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
