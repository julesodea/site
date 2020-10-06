import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout/layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Github from '../components/logos/github';
import LinkedIn from '../components/logos/linkedin';
import CV from '../components/logos/cv';

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
        <section className='container vh contact'>
          <h1 className='contact-heading'>Get in contact with me.</h1>

          <div>
            <a
              target='__blank'
              rel='noreferrer'
              href='mailto: jules.odea@gmail.com'
              className='email'
            >
              jules.odea@gmail.com
            </a>
          </div>

          <div className='icon-container'>
            <a
              href='https://github.com/julesodea'
              target='__blank'
              rel='noreferrer'
            >
              <Github />
            </a>

            <a
              href='https://linkedin.com/in/julesodea'
              target='__blank'
              rel='noreferrer'
            >
              <LinkedIn />
            </a>

            <a href='../images/julesodea-cv.pdf' target='_blank'>
              <CV />
            </a>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
}
