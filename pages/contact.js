import groq from 'groq'
import client from 'client'
import BlockContent from '@sanity/block-content-to-react'
import Seo from 'components/seo'
import { motion } from 'framer-motion'

const Contact = (props) => {
	const { body = [] } = props.contact
	return (
		<article>
			<Seo seo={props.contact} />
			<div className="contactSection uk-section">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="uk-container uk-container-xsmall"
				>
					<BlockContent
						blocks={body}
						imageOptions={{ w: 320, h: 240, fit: 'max' }}
						{...client.config()}
					/>
					<hr className="uk-divider-small" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="uk-container uk-container-xsmall"
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11294.120288411797!2d74.85379686407764!3d32.69237248234279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e85e02bc5ff53%3A0xac8be28bf9572b75!2sThe%20Design%20Kiln!5e0!3m2!1sen!2sin!4v1622038786770!5m2!1sen!2sin"
						width={600}
						height={450}
						style={{border:"0"}}
						allowfullscreen=""
						loading="lazy"
					></iframe>
				</motion.div>
				!
			</div>
		</article>
	)
}

export async function getStaticProps() {
	const contact = await client.fetch(groq`
      *[_type == "single" && title == "Contact"][0]
    `)
	return {
		props: {
			contact,
		},
		revalidate: 60,
	}
}

export default Contact
