import React from 'react';

const Newsitem=(props)=>{
    let { title, description, imageUrl, newsUrl, author , date } =props;
    return (
      <div className="news-card">
    <img
    src={imageUrl}
    onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
    }}
    alt="news"
    className="news-image"
   />

         <div className="news-content">
          <h2 className="news-title">{title}</h2>
          <p className="news-description">{description}</p>
         <p className="datepara">by {!author ? "unknown" : author} on {new Date(date).toGMTString()}</p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="read-more">
          Read More →
          </a>
        </div>
      </div>
    );
}

export default Newsitem;

