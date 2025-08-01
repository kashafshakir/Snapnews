import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Loader from './Loader';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(0);
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.Apikey}&page=${page}&pagesize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(URL);
    let parsed_Data = await data.json();
    setarticles(parsed_Data.articles || []);
    settotalResults(parsed_Data.totalResults || 0);
    setloading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.Apikey}&page=${nextPage}&pagesize=${props.pagesize}`;
    setpage(nextPage);
    let data = await fetch(URL);
    let parsed_Data = await data.json();
    setarticles((prevArticles) => prevArticles.concat(parsed_Data.articles || []));
    settotalResults(parsed_Data.totalResults || 0);
    setloading(false);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="newsitem-headings">Latest updates</h1>
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Loader />}
      >
        <div className="news-grid">
          {Array.isArray(articles) &&
            articles.map((element) => (
              <div className="row" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage || ""}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pagesize: 10,
  category: "science",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number,
  Apikey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
