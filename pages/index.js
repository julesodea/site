import Head from 'next/head';
import Landing from '../components/landing/landing';
import Layout, { siteTitle } from '../components/layout/layout';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Landing />
    </Layout>
  );
}
