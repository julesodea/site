import React from 'react';
import App from 'next/app';

import '../styles/global.css';
import '../styles/typography.scss';
import '../styles/layout.scss';
import '../styles/nav.scss';
import '../styles/posts.scss';
import '../styles/post.scss';
import '../styles/section.scss';
import '../styles/footer.scss';
import '../styles/about.scss';
import '../styles/menu.scss';

import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default MyApp;
