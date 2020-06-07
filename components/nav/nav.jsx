import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Nav() {
  const [toggled, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggled);
    !toggled
      ? document.body.classList.add("overflow")
      : document.body.classList.remove("overflow");
  }

  function removeToggle() {
    setToggle(false);
    document.body.classList = "";
  }

  return (
    <nav className={`nav`}>
      <div className={`menubar`} onClick={handleClick}>
        <div className={toggled ? `menubar-top toggled` : `menubar-top`} />
        <div
          className={toggled ? `menubar-bottom toggled` : `menubar-bottom`}
        />
      </div>

      <div className={`mobile-menu ${toggled ? "open" : ""}`}>
        {toggled ? (
          <ul className={`${toggled ? "display" : ""}`}>
            <motion.div className="mobile-links">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.li variants={item} />
                <motion.li variants={item}>
                  <Link href="/">
                    <a>PRODUCT</a>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/page">
                    <a>PRODUCT</a>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/">
                    <a>PRODUCT</a>
                  </Link>
                </motion.li>
                <motion.li variants={item}>
                  <Link href="/">
                    <a>PRODUCT</a>
                  </Link>
                </motion.li>
              </motion.div>
            </motion.div>
          </ul>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
