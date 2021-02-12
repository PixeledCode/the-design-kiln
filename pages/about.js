import groq from 'groq'
import client from '../client'
import Footer from '../components/footer'
import BlockContent from '@sanity/block-content-to-react'
import Seo from "../components/seo";
import { motion } from "framer-motion"

const About = (props) => {
    const {
    body = []
  } = props.about
  return (
    <>
    <article>
      <Seo seo={props.about}/>
      <div className="uk-section">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="uk-container uk-container-xsmall">
          <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
          <hr className="uk-divider-small" />
        </motion.div>
      </div>
    </article>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}>
      <Footer />
    </motion.div>
    </>
  )
}

export async function getStaticProps(){
    const about =  await client.fetch(groq`
      *[_type == "single" && title == "About"][0]
    `)
    return {
      props: {
        about
      }
    }
}


export default About