import React, {Component} from 'react';
import Header from "./Header";
// import ServiceCard from './ServiceCard';


class Service extends Component{
   
    render() {
        // const{ id,img,price,title} = this.props.service;
return(
    <div className = "service" >
            <Header />
            <h1>this is service page...</h1>
             {/* <ServiceCard/> */}
    </div>

)
    }
}
export default Service;