import Layout, { siteTitle } from '../components/layout/layout';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const pageName = 'Projects';

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
          <h1 className='heading'>Projects</h1>
          <h4 className='subheading'>Recent Work</h4>
          <ul className='grid'>
            {allPostsData.map(({ id, title, featuredImage, subtitle }) => (
              <Link href='/projects/[id]' as={`/projects/${id}`} key={id}>
                <a>
                  <li className='item'>
                    <Image
                      src={featuredImage}
                      alt='project-image'
                      height='400'
                      width='700'
                      layout='responsive'
                    />
                    <h2>{title}</h2>
                    <h5>{subtitle}</h5>
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
