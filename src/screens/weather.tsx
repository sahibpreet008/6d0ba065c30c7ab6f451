import React, { Fragment, useState,useEffect } from "react";
import axios from "axios";
import { Button, Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Input, ListGroup, ListGroupItem } from "reactstrap";


interface WeatherProps {
  match: any
}

export default function Weather(props:WeatherProps) {
  var capital = props.match?.params?.capital || "";

  var apiKey="82ce4d88c966a0cd9283e61889a06e7f";
  const [weather,setWeather]=useState(undefined);
  const [loading,setLoading]=useState(true);


  function fetchWeather(capital : string){
    axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
    .then((res)=>{
      console.log("Response received is ",res.data?.current);
      setWeather(res.data.current);
    })
    .catch((e)=>alert("Error Occured"))
    .finally(()=>setLoading(false));
  }

  useEffect(()=>{
    fetchWeather(capital);
  },[]);


  console.log("Capital is  ",capital);

  if(loading){
    return <div>
      Loading... Please Wait
    </div>
  }

    return (
      <Container className="mb-5">
      <Row className="mt-5">
        <Col md="6" className={"mx-auto"}>
          <Card className="w-100 bg-dark">
            <CardBody>
              <CardTitle className="text-light">
                Weather of Capital : {capital}
              </CardTitle>
              <ListGroup>
                <ListGroupItem>
                  <span className="d-inline-block w-25">temperature</span>: {weather.temperature}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="d-inline-block w-25">weather_icons</span>: <img className={"w-25"} src={weather.weather_icons[0]} />
                </ListGroupItem>
                <ListGroupItem>
                  <span className="d-inline-block w-25">wind_speed</span>: {weather.wind_speed}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="d-inline-block w-25">precip</span>: {Weather.precip || "0"}
                </ListGroupItem>
              </ListGroup>
              <Button className="mt-5 float-right" onClick={()=>props.history.goBack()}>Go Back</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    );
  }