import groq from 'groq'
import client from '../client'
import Footer from '../components/footer'
import BlockContent from '@sanity/block-content-to-react'

const Index = (props) => {
    const {
    body = []
  } = props.posts
  return (
    <>
    <article>
      <div className="uk-section">
        <div className="uk-container uk-container-xsmall">
          <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
          <hr className="uk-divider-small" />
        </div>
      </div>
    </article>
    <Footer />
    </>
  )
}

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "single" && title == "About Us"][0]
    `)
})

export default Index