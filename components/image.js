import client from '../client'
import imageUrlBuilder from '@sanity/image-url'

const Image = (image) => {
  return imageUrlBuilder(client).image(image);

}

export default Image;