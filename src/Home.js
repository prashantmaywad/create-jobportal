import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  InputGroup,
  Input,
  CardImg,
} from "reactstrap";

function Home() {
  const [candidates, setcandidtes] = useState([]);
  const [candidatesArray, setcandidatesArray] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .then((res) => {
        setcandidtes(res.data);
        setcandidatesArray(res.data);
      })
      .catch((ex) => console.log(ex));
  }, []);

  const searchCandidates = (e) => {
    if (e.target && e.target.value) {
      var returnedCandidte = [];
      candidatesArray.forEach((element) => {
        if (element.name.startsWith(e.target.value)) {
          returnedCandidte.push(element);
        }
      });
      setcandidtes(returnedCandidte);
    } else {
      setcandidtes(candidatesArray);
    }
  };
  return (
    <Container fluid className="home">
      <Row>
        <Col className="home__Candidates">
          <div className="candidates">
            <InputGroup className="w-75 home__searchCandidates">
              <Input
                className="input-lg"
                placeholder="Candidate Name......"
                onChange={searchCandidates}
              />
            </InputGroup>
            {candidates.map(({ name, Image, id }) => {
              return (
                <Link to={"/" + id}>
                  <Card className="candidate" key={id}>
                    <CardBody>
                      <CardImg className="cardImage" src={Image}></CardImg>
                      <CardTitle className="cardTitle" tag="h5">
                        {name}
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
