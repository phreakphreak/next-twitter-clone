import Image from "next/image";

const ImageComponent = ({ src, alt, className }) => {
  return <Image src={src} className={className || ""} alt={alt} />;
};

export default ImageComponent;
