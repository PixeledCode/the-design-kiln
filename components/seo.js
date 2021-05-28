import Head from "next/head";
import Images from './images'

const Seo = ({ seo }) => {
  const fullSeo = {
    metaTitle: seo.title === undefined ? `The Design Kiln | Design & Architecture` : `${seo.title} | The Design Kiln` ,
    shareImage: seo.mainImage ? Images(seo.mainImage) : 'icon.png',
    metaDescription: seo.body ? seo.body[0].children[0].text.substring(0,120) 
    : 'The Design Kiln is a design studio offering consultancy services for architecture, urban design, interior, landscape design and land development.'
  }

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title key={'title'}>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} key={'ogTitle'}/>
          <meta name="twitter:title" content={fullSeo.metaTitle} key={'twtterTitle'}/>
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} key={'description'}/>
          <meta property="og:description" content={fullSeo.metaDescription} key={'ogDescription'}/>
          <meta name="twitter:description" content={fullSeo.metaDescription} key={'twitterDescription'}/>
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} key={'image'}/>
          <meta name="twitter:image" content={fullSeo.shareImage} key={'ogImage'}/>
          <meta name="image" content={fullSeo.shareImage} key={'twitterImage'}/>
        </>
      )}
      {seo.authorImage && <meta property="og:type" content="article" key={'ogArticle'}/>}
      <meta name="twitter:card" content="summary_large_image" key={'twitterCard'}/>
    </Head>
  );
};

export default Seo;
