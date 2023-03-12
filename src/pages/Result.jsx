import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const { result, error, isLoading } = useSelector((state) => state.result);

  return <div>Result</div>;
};

export default Result;
