import React from "react";

function Feedback(){
    return (
        <div>
            <div>
                <h2>Rate our Services</h2>
                <img src="" alt="rate-our-services"/>
            </div>
            <div>
                <h2>MESSAGE</h2>
                <form action="submit">
                <label>Feedback and queries you have about our services</label>
                <textarea id="feedbackform" name="feedback" rows="5" cols="50"></textarea>
                <br/>
                <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Feedback;