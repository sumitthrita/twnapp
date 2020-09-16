import React, { Component } from "react";
import Button from "./Button";
import "./HomePageContact.css";
import ContactInfo from "./ContactInfo";
import {Link} from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: null,
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="homepage__contactContainer">
        <header className="homepage__contactHeader">
          <h2>Contact Us</h2>
          <div className="bar"></div>
        </header>
        <div className="homepage__contactBody">
          <div className="homepage__contactInfo">
            <ContactInfo />
          </div>
          <div className="homepage__contactBox">
            <h2 className="homepage__contactSubtitle">Contact us for any help. </h2>
            <form className="homepage__contactForm">
              <input
                onChange={this.handleChange}
                value={this.state.name}
                type="text"
                name="name"
                placeholder="Name"
                className="homepage__-+contactInput"
              />
              <input
                onChange={this.handleChange}
                value={this.state.phone}
                type="text"
                maxLength="10"
                name="contact"
                placeholder="Contact Number"
                className="homepage__contactInput"
              />
              <input
                onChange={this.handleChange}
                value={this.state.email}
                type="email"
                name="email"
                placeholder="Email"
                className="homepage__contactInput"
              />
              <textarea
                onChange={this.handleChange}
                row="20"
                value={this.state.message}
                type="text"
                name="message"
                placeholder="Your Message"
                className="homepage__contactInput, homepage__contactMessage"
              />
              <div className="homepage__contactButton">
                <Button buttonName="Contact Us" />
              </div>
            </form>
          </div>
        </div>
        <Link to="./feedback">
        <Button buttonName="Your Feedback To Our Service" className="feedback__button"/>
        </Link>
      </div>
    );
  }
}
// const Contact =()=>{
//     const [allInput, setAllInput]=useState({
//         email:"",
//         phone:null ,
//         message:""
//     });
//     const handleChange=event=>{
//       let name= event.target.name;
//       let value=event.target.value;

//          (setAllInput({
//           ...allInput,
//           [name]:value
//       }));
//     };

//     return (
//         <div className="contactContainer" >
//             <header className="contactHeader" >
//                 <h1>Contact Us</h1>
//             </header>
//             <div className="contactBody">
//                 <img src={sideImage} alt="bike" className="contactImage" />
//                 <div  >
//                     <h2>Contact us for any help. {allInput.email} {allInput.contact} {allInput.message} </h2>
//                     <form className="contactData">
//                     <input onChange={handleChange} value={allInput.email} type="email" name="email" placeholder="Email" className="contactInput" />
//                     <input onChange={handleChange} value={allInput.phone} type="text" maxLength="10" name="contact" placeholder="Contact Number" className="contactInput" />
//                     <textarea onChange={handleChange} row="20" value={allInput.message} type="text" name="message" placeholder="Your Message" className="contactInput, contactMessage" />
//                     <Button buttonName="Contact Us"  />
//                     </form>
//                 </div>
//             </div>

//         </div>
//     )
// };

export default Contact;
