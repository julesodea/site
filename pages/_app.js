import "../styles/global.css";
import "../styles/typography.scss";

import "../components/nav/nav.scss";
import "../components/layout.scss";

import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}
