import Head from 'next/head'
import 'assets/css/uikit.min.css'
import 'assets/css/style.css'
import Layout from 'components/layout'
import Seo from 'components/seo'
import { motion } from 'framer-motion'
import useScrollRestoration from 'utils/scrollRestore'
import NextNprogress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps, router }) => {
	useScrollRestoration(router)
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="favicon-16x16.png"
				/>
				<link
					rel="icon"
					type="image/x-icon"
					href="favicon/favicon.ico"
				/>
				<link
					rel="manifest"
					href="favicon/site.webmanifest"
				/>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-BZ0DZ5KNPL"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-BZ0DZ5KNPL');`,
					}}
				></script>
			</Head>

			<Layout>
				<NextNprogress
					color="#da5b01"
					startPosition={0.3}
					stopDelayMs={100}
					height="3"
					options={{ easing: 'ease', speed: 300, showSpinner: false }}
				/>
				<Seo seo={pageProps} />
				<motion.div
					initial="pageInitial"
					animate="pageAnimate"
					transition={{ delay: 0.1 }}
					key={router.route}
					variants={{
						pageInitial: { opacity: 0 },
						pageAnimate: { opacity: 1 },
					}}
				>
					<Component {...pageProps} />
				</motion.div>
			</Layout>
		</>
	)
}

export default MyApp
