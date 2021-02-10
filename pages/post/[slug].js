import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import Carousel from '../../components/carousel'
import Images from '../../components/images'
import { motion } from "framer-motion"

const Post = (props) => {
  const {
    title = 'gruham',
    location = '',
    category,
    carousel = [],
    body = [],
    mainImage = ''
  } = props
  return (
      <div className="article">
        <div className="uk-section uk-container uk-container-xsmall">
          <div className={'mainImage'}>
          {carousel.length > 0 ?

          <motion.figure 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}>
              {Carousel(carousel, title)}
          </motion.figure>
            : 
            <motion.figure 
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}>
              {Images(mainImage, title, 600)}
            </motion.figure>
            
          }
          </div>

          <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="title">{title}
          </motion.h1>

          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="postHeader">
            {`${category} | ${location}`}
          </motion.div>

          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}>
          <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
          />
          </motion.div>
          <hr className="uk-divider-small" />
        </div>
      </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "category": categories[]->title,
  "authorImage": author->image,
  body,
  location,
  carousel,
  mainImage
}`

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post