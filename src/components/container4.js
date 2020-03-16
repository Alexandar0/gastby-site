import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class Container4 extends Component {



  render() {

    return (
        <div>
          <Card className="text-center">
            <Card.Body>
            <br />
            <br />
              <Card.Title><h1>VISIONARY</h1>$<a style={{ fontSize: "3em" }}>24</a>/mo</Card.Title>
              <p>Billed as $288 per year</p>
              <br />
              <Card.Text style={{ fontSize: "1.5em" }}>
                ProtonMail for families and small businesses
              </Card.Text>
              <br />
              <p className="text-left">&rarr; &nbsp; &nbsp; 6 users</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; 20 GB storage</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; 50 addresses </p>
              <p className="text-left">&rarr; &nbsp; &nbsp; Supports 10 domains</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; Includes all features</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; Priority support</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; Includes ProtonVPN</p>
              <Button variant="primary">Select</Button>
              <br />
              <br />
            </Card.Body>
          </Card>
        </div>
  );
}
}
export default Container4;