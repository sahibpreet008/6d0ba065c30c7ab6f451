import React, { Fragment, useState } from "react";

import { Button, Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Input, ListGroup, ListGroupItem } from "reactstrap";

interface CountryProps {
  match: any
}
export default function Countries(props: CountryProps) {
  var country = props.match?.params?.country || "";
  var [countries, setCountries] = useState<Array<Object>>([]);
  console.log("Country is ", country);


  return (
    <Container>
      <Row className="mt-5">
        <Col md="6" className={"mx-auto"}>
          <Card className="w-100 bg-dark">
            <CardBody>
              <CardTitle className="text-light">
                Country : {country}
                        </CardTitle>
              <ListGroup>
                <ListGroupItem>
                  <span className="d-inline-block w-25">Capital</span>:- Delhi
                </ListGroupItem>
                <ListGroupItem>
                <span className="d-inline-block w-25">Population</span>:- Delhi
                </ListGroupItem>
                <ListGroupItem>
                <span className="d-inline-block w-25">LatLng</span>:- Delhi
                </ListGroupItem>
                <ListGroupItem>
                <span className="d-inline-block w-25">Flag</span>:- Delhi
                </ListGroupItem>
              </ListGroup>
              <Button className="mt-5 float-right" onClick={()=>alert("Weather pressed")}>Capital Weather</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}