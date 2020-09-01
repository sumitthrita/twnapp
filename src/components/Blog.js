import React from "react";
// import Footer from "./Footer";
import "./blog.css";
import RecentPostDetails from "./Blog/recentPostDetails";
import RecentNewstDetails from "./Blog/recentNewsDetails";
import RecentPost from "./Blog/RecentPost";
import RecentNews from "./Blog/RecentNews";
import ThisWeekDetails from "./Blog/thisWeekLatestDetails";

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
    <div className="blog">
      <div className="blog__top">
        <div className="blog__topLeft">
          <h2>Our Blog</h2>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with
          </p>
        </div>
        <div className="blog__topRight">
          <img
            className="blog__headerImg"
            src="https://pm1.narvii.com/6940/408bdc45c9f5eb0039be8ec6fc4261bf71e2c770r1-1705-1733v2_uhq.jpg"
            alt="img"
          />
        </div>
      </div>

      <div className="blog__mid">
        <div className="blog__column1">
          <div className="blog__colum1ImgDiv">
            <img
              className="blog__midColumnImg"
              src={ThisWeekDetails[0].imgURL}
              alt="img"
            />
          </div>
          <div className="blog__column1Rows">
            <p>{date}</p>
          </div>
          <div className="blog__column1Rows">
            <h2>This Week Latest</h2>
          </div>
          <div className="blog__column1Rows">
            <p>{ThisWeekDetails[0].description}</p>
          </div>
          <div className="blog__column1Rows">
            <button className="button-lg">Read More</button>
          </div>
        </div>

        <div className="blog__column2">
          <div className="blog__column2Search">
            <input placeholder="Search"></input>
          </div>
          <div>
            <h2 className="blog__column2News">NEWS</h2>
          </div>
          <div className="blog__columns2Divs">
            {RecentNewstDetails.map(createNews)}
          </div>
        </div>

        <div className="blog__column3">
          <div className="card">
            <h3 className="blog__recentPostTitle">Recent Post</h3>
            {RecentPostDetails.map(createPost)}
            <br />
          </div>
        </div>
      </div>

      {/* <div className="blog__bottom">
        <Footer />
      </div> */}
    </div>
  );
}

export default Blog;
