import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class Container3 extends Component {



  render() {

    return (
        <div>
          <Card className="text-center">
            <Card.Body>
            <br />
            <br />
              <Card.Title><h1>PROFESSIONAL</h1>$<a style={{ fontSize: "3em" }}>6.25</a>/mo</Card.Title>
              <p>Billed as $75 per year</p>
              <br />
              <Card.Text style={{ fontSize: "1.5em" }}>
                ProtonMail for professionals and businesses
              </Card.Text>
              <br />
              <p className="text-left">&rarr; &nbsp; &nbsp; 1 - 5000 users *</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; 5 GB storage per user *</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; 5 addresses per user *</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; Supports 2 domains *</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; Catch all email, multi user management, priority support and more</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; ProtonVPN (optional) *</p>
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
export default Container3;