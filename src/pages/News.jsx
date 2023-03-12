import React from "react";
import { useSelector } from "react-redux";

const News = () => {
  const { news, error, isLoading } = useSelector((state) => state.news);

  return <div>News</div>;
};

export default News;
