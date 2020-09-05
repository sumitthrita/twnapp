import React from "react";
import Footer from "./Footer";
import "./Blog.css";
import RecentPostDetails from "./Blog/recentPostDetails";
import RecentNewstDetails from "./Blog/recentNewsDetails";
import RecentPost from "./Blog/RecentPost";
import RecentNews from "./Blog/RecentNews";
import ThisWeekDetails from "./Blog/thisWeekLatestDetails";
import blogimg from "./blogs.jpg";

function Blog() {
  function createPost(contact) {
    return (
      <RecentPost
        key={contact.id}
        description={contact.description}
        img={contact.imgURL}
      />
    );
  }
  function createNews(contact) {
    return <RecentNews key={contact.id} description={contact.description} />;
  }

  let date = new Date().toDateString();

  return (
    <div>
      <div className="blog">
        <div className="blog__Header">
          <img className="blog__headerImg" src={blogimg} alt="img" />
          <div className="blog__headerContent">
            <h2>Our Blog</h2>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
            </p>
          </div>
        </div>
        <div className="blog__section">
          <div className="blog__leftSection">
            <div className="blog__weekSection">
              <div className="blog__weekImg">
                <img
                  className="blog__img"
                  src={ThisWeekDetails[0].imgURL}
                  alt="img"
                />
              </div>
              <p>{date}</p>
              <h2>This Week Latest</h2>
              <p>{ThisWeekDetails[0].description}</p>
              <button className="button-lg">Read More</button>
            </div>
            <div className="blog__weekSection">
              <div className="blog__weekImg">
                <img
                  className="blog__img"
                  src={ThisWeekDetails[1].imgURL}
                  alt="img"
                />
              </div>
              <p>{date}</p>
              <h2>This Week Latest</h2>
              <p>{ThisWeekDetails[1].description}</p>
              <button className="button-lg">Read More</button>
            </div>
          </div>
          <div className="blog__rightSection">
            <div className="blog__newsSection">
              <input placeholder="Search"></input>
              <h2 className="blog__column2News">NEWS</h2>
              {RecentNewstDetails.map(createNews)}
            </div>
            <div className="blog__recentNews">
              <h3 className="blog__recentPostTitle">Recent Post</h3>
              {RecentPostDetails.map(createPost)}
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="blog__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
