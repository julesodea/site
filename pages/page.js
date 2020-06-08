import Layout, { siteTitle } from "../components/layout/layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/layout/date";

const pageName = "Posts";

export default function Page({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} ❘ ${pageName}`}</title>
      </Head>
      <section className="container ">
        <ul className="grid">
          {allPostsData.map(({ id, date, title }) => (
            <Link href="/posts/[id]" as={`/posts/${id}`} key={id}>
              <a>
                <li className="item">
                  <h2>{title}</h2>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              </a>
            </Link>
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
