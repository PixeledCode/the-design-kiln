import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import Carousel from '../../components/carousel'
import Image from '../../components/image'

const Post = (props) => {
  const {
    title = 'Missing title',
    location = '',
    category,
    carousel = [],
    body = [],
    mainImage = ''
  } = props
  console.log(props)
  console.log(body)
  return (
      <div className="article">
        <div className="uk-section uk-container uk-container-xsmall">
          {carousel.length > 0 ?
            <Carousel props={carousel} />
            : <img className="mainImage"
                src={Image(mainImage)
                    .height(500)
                    .format('jpg')
                    .auto('format')
                    .url()}
              />
          }
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
  carousel,
  mainImage
}`

Post.getInitialProps = async function (context) {
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post