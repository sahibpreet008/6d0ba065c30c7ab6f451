import React, { Fragment, useState,useEffect } from "react";
import axios from "axios";
import { Button, Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Input, ListGroup, ListGroupItem } from "reactstrap";

interface CountryProps {
  match: any,
  history:any
}


export default function Countries(props: CountryProps) {
  var country = props.match?.params?.country || "";
  const [countries, setCountries] = useState<Array<Object>>([]);
  const [loading,setLoading]=useState(true);
  console.log("Country is ", country);


  function fetchCountries(country : string){
    axios.get("https://restcountries.eu/rest/v2/name/"+country)
    .then((res)=>{
      console.log("Response received is ",res.data);
      setCountries(res.data);
    })
    .catch((e)=>alert("Error Occured"))
    .finally(()=>setLoading(false));
  }

  useEffect(()=>{
    fetchCountries(country);
  },[]);

  
  if(loading){
    return <div>
      Loading... Please Wait
    </div>
  }

  return (countries.length>0 ? 
    <Container className="mb-5">
      {Array.isArray(countries) && countries?.map((item,index)=>
      <Row className="mt-5">
        <Col md="6" className={"mx-auto"}>
          <Card className="w-100 bg-dark">
            <CardBody>
              <CardTitle className="text-light">
                Country : {item.name}
              </CardTitle>
              <ListGroup>
                <ListGroupItem>
                  <span className="d-inline-block w-25">Capital</span>: {item.capital}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="d-inline-block w-25">Population</span>: {item.population}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="d-inline-block w-25">LatLng</span>: {item.latlng[0]} , {item.latlng[1]}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="d-inline-block w-25">Flag</span>: <img className={"w-25"} src={item.flag} />
                </ListGroupItem>
              </ListGroup>
              <Button className="mt-5 float-right" onClick={()=>props.history.push("/weather/"+item.capital)}>Capital Weather</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      )}
    </Container>
    :
    <Container>
      <Row className="mt-5">
        <Col md="6" className={"mx-auto"}>
          <Card className="w-100 bg-dark">
            <CardBody>
              <CardTitle className="text-light">
                No Countries Found
                      </CardTitle>
              <Button className="mt-5 float-right" onClick={() => props.history.goBack()}>Go Back</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}