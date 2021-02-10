import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Images from '../components/images'
import { motion } from "framer-motion"

const Index = (props) => {
    const { posts = [] } = props
    return (
      <div className="projects uk-section uk-container uk-container-large">
        {posts.map(
          ({  slug = '', mainImage = '', title = '' }) =>
            slug && (
                <Link key={slug.current} href="/post/[slug]" passHref as={`/post/${slug.current}`}>     
                  <figure>{
                    Images(mainImage, title) 
                    }</figure>
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