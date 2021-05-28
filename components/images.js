import imageUrlBuilder from '@sanity/image-url'
import client from 'client'
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source)
}

const heightIm = (newWidth, width, height) => {	
  return (height/width)*newWidth + 1;	
}

const Images = (image, title, width) => {
  let url = '';
  let imgSize = [];
  if(image.asset){
    url = image.asset._ref.split('-');	
    imgSize = url[2].split('x');}
  return <img src={urlFor(image)
                  .width(522) 
                  .auto('format')
                  .format('jpg')
                  .url()} 
                  alt={title} width={width} height={heightIm(width, imgSize[0], imgSize[1])}/>
}

export default Images;