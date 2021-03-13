import React,{Fragment,useState} from "react";
import {Button,Container,Row,Col,Card, CardBody,CardTitle,Form,FormGroup,Input} from "reactstrap";


interface HomeProps {
    history:any
}

export default function Home(props:HomeProps) {

    const [country,setCountry]=useState<string>("");

    return (
      <Container>
          <Row className="mt-5">
              <Col md="6" className={"mx-auto"}>
                  <Card className="w-100 bg-dark">
                        <CardBody>
                            <CardTitle className="text-light">
                                 Enter Country
                            </CardTitle>
                            <Form onSubmit={()=>props.history.push("/countries/"+country)}>
                                <FormGroup> 
                                    <Input placeholder="Enter Country" value={country} onChange={(e)=>setCountry(e.target.value)}></Input>
                                </FormGroup>
                                <div>
                                    <Button disabled={country.length<=0}>Submit</Button>
                                </div>
                            </Form>
                        </CardBody>
                  </Card>
              </Col>
          </Row>
      </Container>
    );
  }