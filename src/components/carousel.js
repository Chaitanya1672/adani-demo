import styles from './corousel.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from './Search';

const Corousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    className: 'arrows'
  }
  return (
    <div className={styles.corousel}>
      <Slider {...settings}>
        <div className={styles.heroImg}>
          <div className={styles.text}>
            <h4>Lets find out bext <br />EV stations for you </h4>
            <p>The mobility experience that<br /> we hav come to know is transforming.</p>
          </div>
        </div>
        <div className={styles.heroImg}>
          <div className={styles.text}>
            <h4>Lets find out bext <br />EV stations for you </h4>
            <p>The mobility experience that<br /> we hav come to know is transforming.</p>
          </div>
        </div>
        <div className={styles.heroImg}>
          <div className={styles.text}>
            <h4>Lets find out bext <br />EV stations for you </h4>
            <p>The mobility experience that<br /> we hav come to know is transforming.</p>
          </div>
        </div>
      </Slider>
      <div className={styles.searchComp}>
        <Search />
      </div>
    </div>

  )

};
export default Corousel;