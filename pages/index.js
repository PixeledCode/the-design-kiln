import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Images from '../components/images'

const Index = (props) => {
    const { posts = [] } = props
    console.log(posts)
    return (
      <div className="projects uk-section uk-container uk-container-large">
        {posts.map(
          ({  slug = '', mainImage = '', title = '' }) =>
            slug && (
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>     
                  <a>{
                    Images(mainImage, title) 
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