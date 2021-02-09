import Head from "next/head";
import Image from './image'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'

const image = (img) => {
  return (
    <img
      src={Image(img)
          .height(500)
          .format('jpg')
          .auto('format')
          .url()}
    />
  )
}

const Seo = ({ seo }) => {
  const fullSeo = {
    metaTitle: seo.title == undefined ? `Gruham Studio | Design & Architecture` : `${seo.title} | Gruham Studio` ,
    shareImage: image(seo.mainImage),
    metaDescription: seo.body[0].children[0].text.substring(0,120)
  };
  console.log(fullSeo.metaDescription)
  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title key={'title'}>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} key={'ogtitle'}/>
          <meta name="twitter:title" content={fullSeo.metaTitle} key={'twttertitle'}/>
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} key={'descrip'}/>
          <meta property="og:description" content={fullSeo.metaDescription} key={'ogdescrip'}/>
          <meta name="twitter:description" content={fullSeo.metaDescription} key={'twitterdescrip'}/>
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage.props.src} key={'image'}/>
          <meta name="twitter:image" content={fullSeo.shareImage.props.src} key={'ogimage'}/>
          <meta name="image" content={fullSeo.shareImage.props.src} key={'twitterimage'}/>
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" key={'ogarticle'}/>}
      <meta name="twitter:card" content="summary_large_image" key={'twittercard'}/>
    </Head>
  );
};

export default Seo;