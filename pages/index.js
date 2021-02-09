import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Images from '../components/images'

const Index = (props) => {
    const { posts = [] } = props
    return (
      <div className="projects uk-section uk-container uk-container-large">
        {posts.map(
          ({  slug = '', mainImage = '' }) =>
            slug && (
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>     
                  <a>{
                    <Images url={mainImage} />
                    }</a>
                </Link>
            )
        )}
      </div>
    )
}

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
})

export default Index