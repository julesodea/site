import Head from 'next/head';
import Landing from '../components/landing/landing';
import Section from '../components/section/section';
import Layout, { siteTitle } from '../components/layout/layout';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Landing />
      <Section />
    </Layout>
  );
}
