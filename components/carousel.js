import Images from '../components/images'
import Head from "next/head";

const Carousel = (carousel, title) => {
  return (
    <>
    <Head>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/js/uikit.min.js" /> 
    </Head>
    <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true; autoplay: true; autoplay-interval: 5000; pause-on-hover: true">
      <ul className="uk-slider-items uk-grid">
        {carousel.map( carousels => {
          return (
            <li className="uk-width-3-4">
              <div className="uk-panel">
              {Images(carousels, `${title} ${carousels._key.substring(0, 3)}`) }
              </div>
            </li>
          )
        })
        }
      </ul>
      <a className="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous uk-slider-item="previous">
        <img src="/icons/arrowBack.svg"/>
      </a>
      <a className="uk-position-center-right uk-position-small " href="#" uk-slidenav-next uk-slider-item="next">
        <img src="/icons/arrowFront.svg"/>
      </a>
    </div>
  </>
  );
};

export default Carousel;