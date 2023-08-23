"use client";

import axios from "axios";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [hasMore, setHasMore] = useState(true);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState(-1); // Track the expanded item index

  const getImages = async () => {
    try {
      const { data } = await axios(
        `https://api.unsplash.com/photos?client_id=j6272V856y6JbxGmjWtsF0ZAUUQhHEGqtQ7LuZcP2zA&page=${page}&per_page=12`
        // `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      if (page >= 8) {
        setHasMore(false);
      }
      setImages([...images, ...data]);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (images.length === 0) {
      getImages();
    }
  }, []);

  const handleExpansion = (index) => {
    expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index);
  };

  return (
    <main className={`${styles.main}`}>
      <InfiniteScroll
        dataLength={images.length}
        next={getImages}
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
              <button onClick={() => handleExpansion(i)}>
                <img src={image.urls.regular} alt="" />
              </button>
            </li>
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
}
