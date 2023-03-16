import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { resultApi } from "../store/resultSlice";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";
// import ReactPlayer from "react-player";
import Error from "./Error";
import searchIcon from "../assets/search.svg";

const Result = () => {
  const { results, error, isLoading } = useSelector((state) => state.results);
  const { value } = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (value) {
      if (pathname === "/search") {
        dispatch(resultApi({ value }));
      }
      if (pathname === "/images") {
        dispatch(resultApi({ type: "image", value }));
      }
      // if (pathname === "/news") {
      //   dispatch(resultApi({ type: "news", value }));
      // }
      // if (pathname === "/videos") {
      //   dispatch(resultApi({ type: "videos", value }));
      // }
    }
  }, [value, dispatch, pathname]);

  if (isLoading)
    return (
      <div className="h-[calc(100vh-175px)]">
        <Loading />
      </div>
    );

  if (!value)
    return (
      <div className="h-[calc(100vh-175px)] flex items-center justify-center">
        <div className="px-4 flex items-center">
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-gray-200">
            Enter what you want to search for
          </h1>
          <img
            src={searchIcon}
            alt="searchIcon"
            className="w-7 sm:w-10 blue dark:blue-dark ml-1 -mb-1"
          />
        </div>
      </div>
    );

  if (error) {
    if (error.includes("429")) {
      return (
        <div
          className="mb-4 bg-red-200 py-5 px-6 text-lg text-red-900"
          role="alert"
        >
          Too Many Requests To Day, Try Tomorrow
        </div>
      );
    } else {
      return (
        <div
          className="mb-4 bg-red-200 py-5 px-6 text-lg text-red-900"
          role="alert"
        >
          {error}
        </div>
      );
    }
  }

  switch (pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap px-2 md:px-16 xl:px-56 items-center justify-between pb-20">
          {results?.items?.map(({ link, title }, idx) => {
            return (
              <div
                key={idx}
                className="w-full md:w-2/5 my-5 items-center justify-center"
              >
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">
                    {link.length > 30 ? link.substring(0, 30) : link}
                  </p>
                  <h3 className="sm:text-lg hover:underline dark:text-blue-400 text-blue-600 font-semibold">
                    {title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap px-2 md:px-10 xl:px-20 justify-center pb-20 items-center gap-6 mt-4">
          {results?.items?.map(({ title, image, link }, idx) => {
            return (
              <a
                key={idx}
                href={image?.contextLink}
                target="_blank"
                rel="noreferrer"
                className="w-80 flex flex-col items-center"
              >
                <img src={link} alt={title} loading="lazy" />
                <p className="text-sm mt-2 break-words">{title}</p>
              </a>
            );
          })}
        </div>
      );
    // case "/news":
    //   return (
    //     <div className="flex flex-wrap px-2 sm:px-56 justify-between pb-20 items-center">
    //       {results?.news_results?.map((item) => {
    //         return (
    //           <div
    //             key={item.rank}
    //             className="w-full md:w-2/5 my-5 items-center justify-center"
    //           >
    //             <a
    //               href={item?.link || "#"}
    //               target="_blank"
    //               rel="noreferrer"
    //               className="hover:underline"
    //             >
    //               <h3 className="sm:text-lg dark:text-blue-400 text-blue-600 font-semibold">
    //                 {item.title}
    //               </h3>
    //               <div className="flex gap-4">
    //                 <a
    //                   href={item?.link || "#"}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                 >
    //                   {item?.link || "#"}
    //                 </a>
    //               </div>
    //             </a>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // case "/videos":
    //   return (
    //     <div className="flex flex-wrap pb-20 justify-center px-2 sm:px-56 mt-5">
    //       {results?.video_results?.map(({ rank, link, title }) => {
    //         return (
    //           <div key={rank} className="p-2">
    //             <ReactPlayer url={link} controls width="335px" height="200px" />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    default:
      return <Error />;
  }
};
export default Result;
