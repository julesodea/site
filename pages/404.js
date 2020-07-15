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
        <div
          style={{
            height: `80vh`,
            display: `flex`,
            justifyContent: `center`,
            flexDirection: `column`,
            alignItems: `center`,
            transform: `translateY(-20px)`,
          }}
        >
          <h1>404: Page Not Found </h1>
          <Link href='/'>
            <a>Back to safety</a>
          </Link>
        </div>
      </motion.div>
    </Layout>
  );
}
