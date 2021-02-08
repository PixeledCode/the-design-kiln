import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = (props) => {
  console.log(props)
    const { posts = [] } = props
    return (
      <div className="projects uk-section uk-container uk-container-medium">
        {posts.map(
          ({ _id, slug = '', mainImage = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>     

                  <a>{<img
                    src={urlFor(mainImage)
                        .height(500)
                        .url()}
                    />}</a>
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