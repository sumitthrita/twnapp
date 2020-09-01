import React, {Component} from 'react';
import Header from './Header';
import Button from './Button.js'

class Service extends Component{
   
    render() {
        // const{ id,img,price,title} = this.props.service;
return(
    <div className = "service">
            <Header />
            <h1>this is service page...</h1>
            <div>
                {/* <ServiceList /> */}
            </div>
    </div>

)
    }
}
export default Service;