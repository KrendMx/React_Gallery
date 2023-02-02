import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingImage from "../../ui-kit/LoadingImages";
import styles from "./styles.module.sass";

const GalleryLayout: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(0);

  const fetchData = () => {
    const newItems = [];
    if (page === 1100) {
      setPage(0);
    }
    for (let i = page; i < page + 5; i++) {
      newItems.push(i);
    }
    setItems([...items, ...newItems]);
    setPage(page + 5);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <InfiniteScroll
        dataLength={Infinity}
        next={fetchData as any}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div>
          {items.map((el, index) => {
            return <LoadingImage link={`https://picsum.photos/id/${item}/400/500`} />;
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default GalleryLayout;
