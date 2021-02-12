import groq from 'groq'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'
import Seo from "../components/seo";
import { motion } from "framer-motion"

const Contact = (props) => {
    const {
    body = []
  } = props.contact
  return (
    <article>
      <Seo seo={props.contact}/>
      <div className="contactSection uk-section">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="uk-container uk-container-xsmall">
          <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}/>
            <hr className="uk-divider-small" />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="uk-container uk-container-xsmall">
          <iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                id="gmap_canvas"
                src="https://www.google.com/maps/d/u/0/embed?mid=1WSMIgl-6neXglElOlcdTdsQrjKXFSDx7"></iframe>
          </motion.div>
      </div>
    </article>
  )
}

export async function getStaticProps(){
    const contact =  await client.fetch(groq`
      *[_type == "single" && title == "Contact"][0]
    `)
    return {
      props: {
        contact
      }
    }
}

export default Contact