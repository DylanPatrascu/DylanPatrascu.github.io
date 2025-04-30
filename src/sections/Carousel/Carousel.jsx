import { useState } from "react";
import { ReactComponent as LeftArrowIcon } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/rightArrow.svg";
import styles from "./CarouselStyles.module.css";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => setSlide((slide + 1) % data.length);
  const prevSlide = () => setSlide((slide - 1 + data.length) % data.length);

  return (
    <div className={styles.carousel}>
      <LeftArrowIcon onClick={prevSlide} className={styles.arrow} />
      {data.map((item, idx) => (
        <div key={idx} className={slide === idx ? styles.slide : styles.slideHidden}>
          {item.type === "image" ? (
            <img src={item.src} alt={item.alt || ""} className={styles.media} />
          ) : (
            <div className={styles.videoWrapper}>
              <iframe
                src={item.src}
                title={item.alt || "Video"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      ))}
      <RightArrowIcon onClick={nextSlide} className={styles.arrow} />
      <div className={styles.indicators}>
        {data.map((_, idx) => (
          <button
            key={idx}
            className={idx === slide ? styles.indicator : styles.indicatorInactive}
            onClick={() => setSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
