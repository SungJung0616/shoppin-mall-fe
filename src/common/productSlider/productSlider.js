import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from "../productCard/ProductCard"

const ProductSlider = ({ title, products, loading, error }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{title}</h2>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="product-slider-item"
        containerClass="carousel-container"
        showDots={true}
        responsive={responsive}
        dotListClass="custom-dot-list"
      >
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
