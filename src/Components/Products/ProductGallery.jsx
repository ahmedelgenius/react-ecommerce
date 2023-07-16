import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import productOne from "../../assets/images/Iphone.png";
import catImgOne from "../../assets/images/laptop.png";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";

const ProductGallery = () => {
  const images = [
    {
      original: `${productOne}`,
      thumbnail: `${productOne}`,
    },
    {
      original: `${catImgOne}`,
      thumbnail: `${catImgOne}`,
    },
    {
      original: `${productOne}`,
      thumbnail: `${productOne}`,
    },
  ];
  return (
    <div className="w-3/4  container mx-auto">
      <ImageGallery
        items={images}
        defaultImage={productOne}
        showFullscreenButton={false}
        // isRTL={true}
        showPlayButton={false}
        // showThumbnails={false}
        // showBullets={false}
        showNav={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
