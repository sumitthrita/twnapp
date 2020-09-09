import React, {Component} from 'react';
import sideImage from './blogs.jpg';
import Button from './Button';
 import "./Contact.css";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            phone:null,
            message:""
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange=event=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="contactContainer" >
             <header className="contactHeader" >
                 <h1>Contact Us</h1>
             </header>
             <div className="contactBody">
                 <img src={sideImage} alt="bike" className="contactImage" />
                 <div  >
                     <h2>Contact us for any help. </h2>
                     <form className="contactData">
                     <input onChange={this.handleChange} value={this.state.email} type="email" name="email" placeholder="Email" className="contactInput" />
                     <input onChange={this.handleChange} value={this.state.phone} type="text" maxLength="10" name="contact" placeholder="Contact Number" className="contactInput" />
                     <textarea onChange={this.handleChange} row="20" value={this.state.message} type="text" name="message" placeholder="Your Message" className="contactInput, contactMessage" />
                     <div className="contactButton" ><Button buttonName="Contact Us"  /></div> 
                     </form>
                 </div>
             </div>
            
         </div>
        )
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