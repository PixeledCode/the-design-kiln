import Head from "next/head";
import "../assets/css/uikit.min.css";
import "../assets/css/style.css";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { motion } from 'framer-motion';


const MyApp = ({ Component, pageProps, router  }) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="https://gruhamstudio.com/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://gruhamstudio.com/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://gruhamstudio.com/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://gruhamstudio.com/favicon/favicon.ico" />
        <link rel="manifest" href="https://gruhamstudio.com/favicon/site.webmanifest" />
      </Head>
      <Layout >
      <Seo seo={pageProps}/>
        <motion.div initial="pageInitial" animate="pageAnimate" transition={{ delay: 0.1 }} key={router.route}
        variants={{pageInitial: {opacity: 0},pageAnimate: {opacity: 1}, }}>
        <Component {...pageProps} />
      </motion.div>
      </ Layout >
    </>
  );
};

export default MyApp;