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
            <h1>{postData.title}</h1>

            <div
              className='content'
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
            <img src={postData.img} alt='img' />
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
