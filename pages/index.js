import Head from 'next/head';
import Landing from '../components/landing/landing';
import Layout, { siteTitle } from '../components/layout/layout';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Landing />
        {/* <Section /> */}
      </motion.div>
    </Layout>
  );
}
