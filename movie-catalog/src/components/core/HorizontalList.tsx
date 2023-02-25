import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

interface IHorizontalList {
  items: JSX.Element[] | undefined,
  className?: string
}

const HorizontalList = ({ items, className }: IHorizontalList) => {
  return (
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
        className={`${className}`}
        containerClass="container w-full lg:min-w-3/4 p-2 bg-gray-300 m-2 rounded"
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl={false}
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 6,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 2,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 4,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable={false}
      >
        {items}
      </Carousel>
      )
}

export default HorizontalList