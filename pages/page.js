import Layout, { siteTitle } from '../components/layout/layout';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

import { motion } from 'framer-motion';

const pageName = 'Posts';

export default function Page({ allPostsData }) {
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
          <h1>Glorious Posts</h1>
          <ul className='grid'>
            {allPostsData.map(({ id, title }) => (
              <Link href='/posts/[id]' as={`/posts/${id}`} key={id}>
                <a>
                  <li className='item'>
                    <h2>{title}</h2>
                    <br />
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </section>
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
