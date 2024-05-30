import { VStack, Center, Image } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import ImageViewer from "react-simple-image-viewer";
import anhchungminh from "../../public/anhchungminh.svg";
import gallery1 from "../../public/gallery/gallery_6.jpg";
import gallery2 from "../../public/gallery/gallery_7.jpg";
import gallery3 from "../../public/gallery/gallery_8.jpg";
import gallery4 from "../../public/gallery/gallery_9.jpg";
import gallery5 from "../../public/gallery/gallery_10.jpg";
import floral2 from "../../public/floral2.svg";

const GridGallery = () => {
  const imgs = useMemo(
    () => [
      gallery1.src,
      gallery2.src,
      gallery3.src,
      gallery4.src,
      gallery5.src,
    ],
    []
  );

  const [currImage, setCurrImage] = useState(null);

  return (
    <>
      {currImage != null && (
        <ImageViewer
          src={imgs}
          currentIndex={currImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={() => setCurrImage(null)}
        />
      )}

      <Center justifyContent="center" mb={8}>
        <Image
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          alt="anhchungminh"
          src={anhchungminh.src}
          width={360}
        />
      </Center>
      <div className="container">
        <div className="gallery">
          <div
            className="gallery__item gallery__item--lg"
            onClick={() => setCurrImage(0)}
          >
            <Image src={gallery1.src} alt="gallery1" data-aos="zoom-in-up" />
          </div>
          <div
            className="gallery__item gallery__item--hor"
            onClick={() => setCurrImage(1)}
          >
            <Image src={gallery2.src} alt="gallery2" data-aos="zoom-in-up" />
          </div>
          <div
            className="gallery__item gallery__item--lg"
            onClick={() => setCurrImage(2)}
          >
            <Image src={gallery3.src} alt="gallery3" data-aos="zoom-in-up" />
          </div>
          <div className="gallery__item" onClick={() => setCurrImage(3)}>
            <Image src={gallery4.src} alt="gallery4" data-aos="zoom-in-up" />
          </div>
          <div className="gallery__item" onClick={() => setCurrImage(4)}>
            <Image src={gallery5.src} alt="gallery5" data-aos="zoom-in-up" />
          </div>
        </div>
      </div>

      <Center my="120px">
        <Image
          data-aos="zoom-in-up"
          data-aos-delay="500"
          alt="floral2"
          src={floral2.src}
          width={120}
        />
      </Center>
    </>
  );
};

export default GridGallery;
