import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}


const Carousel = (carousel) => {
  return (
    <div className="uk-section uk-container uk-container-small">
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true; autoplay: true; autoplay-interval: 5000; pause-on-hover: true">
      <ul className="uk-slider-items uk-grid">
        {carousel.props.map( carousels => {
          return (
            <li className="uk-width-3-4">
              <div className="uk-panel">
                <img
                    src={urlFor(carousels)
                        .width(500)
                        .url()}
                    />
              </div>
            </li>
          )
        })}
      </ul>
      <a className="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous uk-slider-item="previous">
        <img src="/icons/arrowBack.svg"/>
      </a>
      <a className="uk-position-center-right uk-position-small " href="#" uk-slidenav-next uk-slider-item="next">
        <img src="/icons/arrowFront.svg"/>
      </a>
    </div>
    </div>
  );
};

export default Carousel;