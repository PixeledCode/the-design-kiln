import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Image from '../components/image'

const Index = (props) => {
    const { posts = [] } = props
    return (
      <div className="projects uk-section uk-container uk-container-medium">
        {posts.map(
          ({ _id, slug = '', mainImage = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>     
                  <a>{
                    <img
                    src={Image(mainImage)
                        .height(500)
                        .quality(80)
                        .format('jpg')
                        .auto('format')
                        .url()}
                    />
                    }</a>
                </Link>{' '}
              </li>
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