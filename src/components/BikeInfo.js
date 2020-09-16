import React, {Component} from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import './BikeInfo.css';
import bikes from './BikeInfoDetail';
import Customise from './Customise';
import BikeServiceSection from './HomepageService';


class BikeInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            brand:"",
            brandName:"",
            modelSelected:""
        };
        this.handleClickBike=this.handleClickBike.bind(this);
        this.handleClickModel=this.handleClickModel.bind(this);
        this.BikeName=this.BikeName.bind(this);
        this.BikeModel=this.BikeModel.bind(this);
        
    }

    BikeName () {
        return bikes.map(bike=>{
            let title =bike.title;
            let id2 = bike.id;
            return (
                <Dropdown.Item onClick={this.handleClickBike} id={id2}  name={title} >{title} </Dropdown.Item>
            );
        })
    }

    BikeModel () {
        return bikes.map( bike => {
            let modelname=this.state.brandName;
            let id2=bike.id;
            let modelList=bike.[modelname];

            if(modelname===id2){
                return (
                    modelList.map(model=>{
                         let modelItem=model.model;
                        return (
                        <Dropdown.Item  onClick={this.handleClickModel} name={modelItem}> {modelItem} </Dropdown.Item>
                        );
                    })
                )
            }
        })
        
     }
    
    handleClickBike(event){
        let name=event.target.name;
        let id=event.target.id; 
        this.setState({brand:name,brandName:id});  
    }
    handleClickModel(event){
        let value=event.target.name;
        this.setState({modelSelected:value});
    }
    render(){
         return (
        <div>
           <Header /> 
           <div className="bikeInfo__Container">
            <div className="bikeInfo__Brand_Dropdown">
             <DropdownButton 
                 id="dropdown-basic-button" 
                 drop="right" 
                 title="Bike Brand"
                 variant="danger"
                 size="lg"
                  >
                      <div className="dropdown__listItems">  {this.BikeName()} </div>
             </DropdownButton>
             <input type="text" placeholder="Selected Brand" className="bikeInfo__Brand_input" value={this.state.brand} />
            </div>
            <div className="bikeInfo__Model_Dropdown">
              <DropdownButton 
                  id="dropdown-basic-button" 
                  drop="right" 
                  title="Bike Model"
                  variant="danger"
                  size="lg"
                  disabled ={this.state.brandName.length===0}
                  >
            <div className="dropdown__listItems"> {this.BikeModel()}</div>  
              </DropdownButton>
              <input type="text" placeholder="Selected Model" className="bikeInfo__Model_input" value={this.state.modelSelected} />
            </div>
           </div>   
           <BikeServiceSection/>
           <Customise />
           <Footer/>
        </div>
    )};
};
export default BikeInfo;