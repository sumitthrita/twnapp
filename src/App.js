import React from "react";
import './App.css';


import Homepage from './components/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blog from './components/Blog';
import Service from './components/Service';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Login from './components/Login';
import BikeInfo from './components/BikeInfo';
import Feedback from './components/feedbackemotion';

 
const App=()=> {
  
  return ( 
    <Router>
        <div>
         {/* <Homepage /> */}
         <Switch>
           <Route path="/" exact strict component={Homepage} />
           <Route path="/blog"  exact strict component={Blog} />
           <Route path="/services" exact strict component={Service} />
           <Route path="/contact" exact strict component={Contact}/>
           <Route path="/signup" exact strict component={Registration}/>
           <Route path="/login" exact strict component={Login}/>
           <Route path="/bikeInfo" exact strict component={BikeInfo} />
           <Route path="/feedback" eact strict component={Feedback} />
          </Switch>
         </div>
   </Router>    
  );
} 

export default App;

