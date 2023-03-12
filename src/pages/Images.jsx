import React from "react";
import { useSelector } from "react-redux";

const Images = () => {
  const { images, error, isLoading } = useSelector((state) => state.images);

  return <div>Images</div>;
};

export default Images;
