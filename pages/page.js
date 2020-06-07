import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

const pageName = "Posts";

export default function Page({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} ❘ ${pageName}`}</title>
      </Head>
      <section className="container">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
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
