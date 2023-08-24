"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetImages } from "@/store/actions/searchAction";
import { setQuery, setPage , setImages} from "@/store/reducers/searchReducers";
import { useParams, useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { images, hasMore } = useSelector((state) => state.searchReducer);

  const [dets, setDets] = useState(-1);
  const [expandedIndex, setExpandedIndex] = useState(-1); // Track the expanded item index

  const GetDetails = (index) => {
    dets === index ? setDets(-1) : setDets(index);
  };

  const handleExpansion = (index) => {
    expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index);
  };

  const GetImages = () => dispatch(asyncSetImages());

  useEffect(() => {
    dispatch(setQuery(slug));
    dispatch(setPage(1));
    dispatch(setImages([]));
    router.refresh();
  }, [slug]);

  useEffect(() => {
    GetImages();
  }, []);
  return (
    <main className={`${styles.main}`}>
      <InfiniteScroll
        dataLength={images.length}
        next={GetImages}
        hasMore={hasMore}
        loader={<h4 className={styles.InfiniteScroll}>Loading...</h4>}
        endMessage={
          <p className={styles.InfiniteScroll}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className={`${styles.ul}`}>
          {images.map((image, i) => (
            <li
              className={`${styles.li} ${
                expandedIndex === i ? styles.full : ""
              }`}
              key={i}
            >
              <button
                onMouseEnter={() => GetDetails(i)}
                onMouseLeave={() => GetDetails(i)}
              >
                {dets === i && (
                  <div className={styles.MoreDetails}>
                    <div className={styles.detailsBtn}>↗</div>
                  </div>
                )}
                <img
                  src={image.urls.regular}
                  alt=""
                  onClick={() => handleExpansion(i)}
                />
              </button>
            </li>
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
}
