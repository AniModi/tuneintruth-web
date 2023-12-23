import React, { useEffect, useState } from "react";
import "./Articles.css";

const ArticleCard = ({ headline, rhymingHeadline, bias, link }) => {
  return (
    <div className="article-card">
      <h2 className="headline">{headline}</h2>
      <p className="rhyming-headline">{rhymingHeadline}</p>
      <p className="bias-summary">{bias}</p>
      <a
        href={link}
        className="read-more-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
    </div>
  );
};

const Articles = () => {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("http://localhost:5000/api/fetch-news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      });
      const data = await res.json();
      console.log(data);
      setArticlesData(data);
    }
    fetchArticles();
  }, []);

  return (
    <div className="articles-container">
      <h1>Articles</h1>
      <div className="article-cards">
        {articlesData.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
