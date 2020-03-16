import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class Container1 extends Component {



  render() {

    return (
        <div>
          <Card className="text-center">
            <Card.Body>
            <br />
            <br />
              <Card.Title><h1>FREE</h1>$<a style={{ fontSize: "3em" }}>0</a>/mo</Card.Title>
              <br />
              <br />
              <br />
              <Card.Text style={{ fontSize: "1.5em" }}>
                The basics for private and secure communications
              </Card.Text>
              <br />
              <p className="text-left">&rarr; &nbsp; &nbsp; 1 user</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; 500 MB storage</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; 1 address</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; No domain support</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; ProtonVPN (optional) *</p>
              <br />
              <br />
              <br />
              <br />
              <Button variant="primary">Select</Button>
              <br />
              <br />
            </Card.Body>
          </Card>
        </div>
  );
}
}
export default Container1;


{/*

class Container1 extends Component {

  state = {
    Plans: [],
  }

   requestPlans = async (currency = 'EUR') => {
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json;charset=utf-8');
    myHeaders.append('x-pm-appversion', 'Other');
    myHeaders.append('x-pm-apiversion', '3');
    myHeaders.append('Accept', 'application/vnd.protonmail.v1+json');

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    const response = await fetch(`https://api.protonmail.ch/payments/plans?${currency}`, myInit)
    const result = response.json();

    return result.Plans;
};

  render() {

    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark"><a className="navbar-brand" href="null">Quadrant 2</a></nav> <br />
        <div className="container">
        <h2>Guests :</h2>
        {this.state.Plans.map((Plans) => (
          <div key={Plans.ID} className="row">
                   <div className="col-md-6">
                   <div className="card">
                   <h5 className="card-header">
                     {Plans.Name}
                   </h5>
                   <div className="card-body">
                     <p className="card-text">
                       {Plans.Currency}
                     </p>
                   </div>
                   <div className="card-footer">
                     {Plans.Pricing}
                   </div>
                 </div>
                 <br />
                 </div>
<span></span>
          </div>
        ))}
        </div>
        </div>
  );
}
}

*/}