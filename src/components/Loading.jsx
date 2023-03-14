import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <MagnifyingGlass
        visible={true}
        height="75"
        width="75"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#2563eb"
      />
    </div>
  );
};

export default Loading;
