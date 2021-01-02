import React, { Component } from "react";
import "./Candidates.css";
import axios from "axios";
import { Card, CardBody, CardTitle, CardImg, Button } from "reactstrap";
import Header from "./Header";
import { Link } from "react-router-dom";

export class Candidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      Name: "",
      Imane: "",
    };
  }
  shortlist() {}
  reject() {}
  componentDidMount() {
    const windowUrl = window.location.pathname;
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .then((res) => {
        res.data.forEach((element) => {
          if ("/" + element.id === windowUrl) {
            this.setState({
              id: element.id,
              Name: element.name,
              Image: element.Image,
            });
          }
        });
      })
      .catch((ex) => console.log(ex));
  }
  render() {
    const { id, Name, Image } = this.state;
    return (
      <>
        <Header />
        <div className="candidates">
          <Card className="candidate" key={id}>
            <CardBody>
              <CardImg className="cardImage" src={Image}></CardImg>
              <CardTitle tag="h5">{Name}</CardTitle>
            </CardBody>
            <div className="btns">
              <Link to={"/shortlist"}>
                <Button
                  className="btn_shortlist"
                  onClick={this.shortlist}
                  color="primary"
                >
                  Shortlist
                </Button>
              </Link>

              <Link to={"/reject"}>
                <Button
                  className="btn_reject"
                  onClick={this.reject}
                  color="danger"
                >
                  Reject
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Candidates;
