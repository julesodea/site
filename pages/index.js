import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout/layout";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="container flex ">
        <h1>welcome to the new site.</h1>
        <Link href="/page">
          <a className="button">View Posts</a>
        </Link>
      </section>
    </Layout>
  );
}
