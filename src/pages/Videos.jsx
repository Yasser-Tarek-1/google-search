import React from "react";
import { useSelector } from "react-redux";

const Videos = () => {
  const { videos, error, isLoading } = useSelector((state) => state.videos);

  return <div>Videos</div>;
};

export default Videos;
