import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { motion } from 'framer-motion';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='container post-container'>
          <article>
            <h5>{postData.subtitle}</h5>
            <h1>{postData.title}</h1>
            <div className='links'>
              <div className='back-button'>
                <Link href='/page'>
                  <a>← Back to posts</a>
                </Link>
              </div>
              <a href={postData.link} target='__blank' rel='noopener'>
                DEMO
              </a>
              <a href={postData.link2} target='__blank' rel='noopener'>
                MORE
              </a>
            </div>

            <p>{postData.summaryone}</p>
            <img src={postData.featuredImage} alt='img' />
            <p>{postData.summarytwo}</p>
          </article>
          <div className='back-button'>
            <Link href='/page'>
              <a>← Back to posts</a>
            </Link>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
