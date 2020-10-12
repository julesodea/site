import { useState, useEffect } from 'react';

import Head from 'next/head';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

export const siteTitle = 'Jules ';

export default function Layout({ children, home }) {

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content="Jules O'Dea Portfolio Web / Front End Development"
        />
        <meta name="author" content="Jules O'Dea"/>
        <meta name="robots" content="index, follow"/>
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="keywords" content="jules o'dea odea portfolio web development front end development react"></meta>
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Nav />

      <main>{children}</main>
      {!home ? <Footer /> : null}

    </>
  );
}
