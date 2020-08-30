import React from 'react'
import Footer from "./Footer"
import "./blog.css";

function Blog() {
    return (
        <div>
            <div className="blog__header">
                <h2>Our Blog</h2>
            </div>

            <div className="blog__divs">
                <div className="blog__leftcolumn">
                    <div className="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <div className="fakeimg">Image</div>
                        <p>Some text..</p>
                    </div>
                </div>
                <div className="blog__midcolumn">
                    <div className="card">
                        <h2>About Me</h2>
                        <div className="fakeimg">Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                </div>
                <div className="blog__rightcolum">
                    <div className="card">
                        <h3>Popular Post</h3>
                        <div className="fakeimg">Image</div><br />
                        <div className="fakeimg">Image</div><br />
                        <div className="fakeimg">Image</div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>


    )
}

export default Blog;


