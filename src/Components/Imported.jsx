import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from './Home';
import Contact from './Contact';
import Gallery from './Gallery';
import { Redirect } from "react-router-dom";
import  Nav from './Nav';
import Footer from "./Footer";
import { MovieShow } from "./Movie";
import List from './TodoList';
const Imported =()=>{

    return(
        <>
        
        <Nav/>
        <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/movies" component={MovieShow}/>
<Route exact path="/gallery" component={Gallery}/>
<Route exact path="/list" component={List}/>
<Redirect to='/' />
            </Switch>
       <Footer/>
        </>
    )
}
export default Imported;