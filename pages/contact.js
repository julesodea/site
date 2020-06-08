import Layout, { siteTitle } from "../components/layout/layout";
import Head from "next/head";

const pageName = "Contact";

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} ❘ ${pageName}`}</title>
      </Head>
      <section className="container">
        <h1>Contact</h1>
      </section>
    </Layout>
  );
}
