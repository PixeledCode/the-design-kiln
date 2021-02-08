import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import Carousel from '../../components/carousel'

const Post = (props) => {
  console.log(props)
  const {
    title = 'Missing title',
    location = '',
    category,
    carousel = [],
    body = []
  } = props
  return (
      <div className="article">
        <div className="uk-section uk-container uk-container-xsmall">
          <Carousel props={carousel} />
          <h1 className="title">{title}</h1>
          <div className="postHeader">
            {`${category} | ${location}`}
          </div>
          
          <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
          />
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
  carousel
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post