import Image from 'next/image'

const Images = (image, title) => {
  const url = image.url ? (image.url.asset._ref).split('-') : image.asset._ref.split('-');
  const img = `https://cdn.sanity.io/images/56qzlodi/production/${url[1]}-${url[2]}.${url[3]}`;
  const imgSize = url[2].split('x');
  return <Image src={`${img}?fm=jpg&auto=format`} width={imgSize[0]} height={imgSize[1]} objectFit={'cover'} alt={title}/>
}

export default Images;