import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

const pageName = "Page Two";

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} ❘ ${pageName}`}</title>
      </Head>
      <section className="container">
        <h1>Page two</h1>
      </section>
    </Layout>
  );
}
