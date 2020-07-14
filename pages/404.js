import Layout from '../components/layout/layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function Custom404() {
  return (
    <Layout>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1
          style={{
            height: `90vh`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          404: Page Not Found
        </h1>
        <Link href='/'>
          <a>Back to safety</a>
        </Link>
      </motion.div>
    </Layout>
  );
}
