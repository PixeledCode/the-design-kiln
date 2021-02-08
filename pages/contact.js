import groq from 'groq'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'

const Index = (props) => {
    const {
    title = 'Missing title',
    body = []
  } = props.posts
  return (
    <article>
      <div className="contactSection uk-section">
        <div className="uk-container uk-container-xsmall">
          <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
          <hr className="uk-divider-small" />
          
          <iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                id="gmap_canvas"
                src="https://www.google.com/maps/d/u/0/embed?mid=1WSMIgl-6neXglElOlcdTdsQrjKXFSDx7"></iframe>
        </div>
      </div>
    </article>
  )
}

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "single" && title == "Contact Us"][0]
    `)
})

export default Index