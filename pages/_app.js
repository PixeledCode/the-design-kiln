import App from "next/app";
import Head from "next/head";
import "../css/style.css";
import { createContext } from "react";
import Layout from "../components/layout";
import { motion } from 'framer-motion';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps, router  }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <title>Gruham Studio | Design &amp; Architecture</title>
        <meta name="title" content="Gruham Studio | Design &amp; Architecture" />
        <meta name="description"
          content="Gruham Studio is a Design Studio Offering Design Consultancy For Architecture, Urban Design, Interior, Landscape Design And Land Development etc." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gruhamdesign.com/" />
        <meta property="og:title" content="Gruham Studio | Design &amp; Architecture" />
        <meta property="og:description"
          content="Gruham Studio is a Design Studio Offering Design Consultancy For Architecture, Urban Design, Interior, Landscape Design And Land Development etc." />
        <meta property="og:image" content="https://gruhamstudio.com/favicon/android-chrome-512x512.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gruhamdesign.com/" />
        <meta property="twitter:title" content="Gruham Studio | Design &amp; Architecture" />
        <meta property="twitter:description"
          content="Gruham Studio is a Design Studio Offering Design Consultancy For Architecture, Urban Design, Interior, Landscape Design And Land Development etc." />
        <meta property="twitter:image" content="https://gruhamstudio.com/favicon/android-chrome-512x512.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="https://gruhamstudio.com/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://gruhamstudio.com/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://gruhamstudio.com/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://gruhamstudio.com/favicon/favicon.ico" />
        <link rel="manifest" href="https://gruhamstudio.com/favicon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <Layout />
      <GlobalContext.Provider value={global}>
        <motion.div initial="pageInitial" animate="pageAnimate"  key={router.route}
        variants={{pageInitial: {opacity: 0},pageAnimate: {opacity: 1},}}>
        <Component {...pageProps} />
        </motion.div>
      </GlobalContext.Provider>
      {/* <Footer /> */}
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  // const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps };
};

export default MyApp;