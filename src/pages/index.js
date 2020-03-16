import React from "react"
import './index.css';
import { Component } from 'react';
import { Dropdown, DropdownButton, ButtonToolbar } from 'react-bootstrap';


import Container1 from '../components/container1';
import Container2 from '../components/container2';
import Container3 from '../components/container3';
import Container4 from '../components/container4';


class IndexPage extends Component {


  render() {

    return (
  <div>

      <h1>Plans &amp; prices</h1>

      <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <ButtonToolbar className="ml-auto">       
      <DropdownButton style={{marginRight: "10px" }} variant="outline-dark" id="dropdown-basic-button" title="Annually">
        <Dropdown.Item href="#/action-1">One time payment</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Monthly</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Yearly</Dropdown.Item>
      </DropdownButton>
      <DropdownButton variant="outline-dark" id="dropdown-basic-button" title="€Euro">
        <Dropdown.Item href="#/action-1">€Euro</Dropdown.Item>
        <Dropdown.Item href="#/action-2">$Dollar</Dropdown.Item>
        <Dropdown.Item href="#/action-3">(CHF)Franc</Dropdown.Item>
      </DropdownButton> 
      </ButtonToolbar> 
      </nav>  <br />
      <div>
       <div className="row">
           <div className="col-md-3">
               <div className="container">
               <Container1/>
               </div>
           </div>
           <div className="col-md-3">
               <div className="container">
               <Container2/>
               </div>
           </div>
           <div className="col-md-3">
               <div className="container">
               <Container3/>
               </div>
           </div>
           <div className="col-md-3">
               <div className="container">
               <Container4/>
               </div>
           </div>
       </div>
   </div>
       

  </div>
  );
}
}

export default IndexPage
