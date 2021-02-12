import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Images from '../components/images'
import UserContext from '../components/context'
import { useEffect, useContext } from 'react';

const Index = (props) => {
  const { scrollRef } = useContext(UserContext);
  useEffect(() => {
    window.scrollTo(0, scrollRef.current.scrollPos);
    const handleScrollPos = () => {
      scrollRef.current.scrollPos = window.scrollY
    };
    window.addEventListener('scroll', handleScrollPos);
    return () => {
      window.removeEventListener('scroll', handleScrollPos);
    };
  }, []);
  const { posts = [] } = props;
    return (
      <div className="projects uk-section uk-container uk-container-large">
        {posts.map(
          ({  slug = '', mainImage = '', title = '' }) =>
            slug && (
                <Link key={slug.current} href="/post/[slug]" as={`/post/${slug.current}`}>     
                  <a>{
                    Images(mainImage, title, 522)
                    }</a>
                </Link>
            )
        )}
      </div>
    )
}


export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
    return {
      props: {
        posts
      },
    }
}

export default Index