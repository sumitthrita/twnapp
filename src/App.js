import React from "react";
import './App.css';


import Homepage from './components/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blog from './components/Blog';
import Service from './components/Service';

 
const App=()=> {
  
  return ( 
    <Router>
        <div>
         {/* <Homepage /> */}
         <Switch>
           <Route path="/" exact strict component={Homepage} />
           <Route path="/blog"  exact strict component={Blog} />
           <Route path="/services" exact strict component={Service} />
         </Switch>
         </div>
   </Router>    
  );
}

export default App;

