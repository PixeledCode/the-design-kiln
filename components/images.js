const height = (newWidth, width, height) => {
  return (height/width)*newWidth;
}

const Images = (image, title, width) => {
  const url = image.url ? (image.url.asset._ref).split('-') : image.asset._ref.split('-');
  const img = `https://cdn.sanity.io/images/56qzlodi/production/${url[1]}-${url[2]}.${url[3]}`;
  const imgSize = url[2].split('x');
  return <img src={`${img}?fm=jpg&auto=format&w=${width}`} width={width} height={height(522, imgSize[0], imgSize[1])} alt={title}/>
}

export default Images;