import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class Container2 extends Component {



  render() {

    return (
        <div>
          <Card className="text-center">
            <Card.Body>
              <h3 style={{ color: "#88DC59" }}>MOST POPULAR</h3>
              <Card.Title><h1>PLUS</h1>$<a style={{ fontSize: "3em" }}>4</a>/mo</Card.Title>
              <p>Billed as $48 per year</p>
              <br />
              <Card.Text style={{ fontSize: "1.5em" }}>
                Full-featured mailbox with advanced protection
              </Card.Text>
              <br />
              <p className="text-left">&rarr; &nbsp; &nbsp; 1 user</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; 5 GB storage *</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; 5 addresses *</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; Supports 1 domain *</p>
              <p className="text-left">&rarr; &nbsp; &nbsp; Supports folders, labels, filters, auto-reply, IMAP/SMTP and more</p>
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
export default Container2;