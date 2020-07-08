import Layout, { siteTitle } from '../components/layout/layout';
import Head from 'next/head';
import { motion } from 'framer-motion';

const pageName = 'Page Two';

export default function Page() {
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
          <h1>Page two</h1>
        </section>
      </motion.div>
    </Layout>
  );
}
