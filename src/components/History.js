import React, { Component } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
      vehicles: this.props.history.location.state,
    };
  }
  componentDidMount() {
    //   this.setState({
    //     vehicles: this.props.history.location.state
    //   },() => {
    //     localStorage.setItem('data', JSON.stringify(this.props.history.location.state))
    //   });
    // }

    const data = this.props.history.location.state;

    // if (data === undefined) {
    //   console.log("undefined");
    // } else {
    //   const arrcpy = [...this.state.vehicles];
    //   arrcpy.push(data);
    //   console.log(data);
    //   localStorage.setItem("data", JSON.stringify(data));
    // }
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    console.log(this.props.history.location.state);
    return (
      <div>
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>
          Vehiles History Details
        </h4>
        <div style={{ marginLeft: "10px" }}>
          Search :
          <Form.Control
            style={{ width: "20vw" }}
            type="text"
            placeholder="Enter vehicle number to search"
            onChange={(e) => this.searchSpace(e)}
          />
        </div>
        {this.state.vehicles === undefined
          ? ""
          : this.state.vehicles
              .filter((data) => {
                if (this.state.search == null) return data;
                else if (
                  data.vehiclenumber
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
                ) {
                  return data;
                }
              })
              .map((e, i) => {
                return (
                  <>
                    <Card key={i} style={{ margin: "10px" }}>
                      <Card.Body>
                        <Row>
                          <Col>
                            <Card.Title>
                              Vehicle Number: {e.vehiclenumber.toUpperCase()}
                            </Card.Title>
                          </Col>
                          <Col>Date : {e.date}</Col>
                        </Row>

                        <Card.Subtitle className="mb-2 text-muted">
                          licence number : {e.licencenumber.toUpperCase()}
                        </Card.Subtitle>
                        <Row>
                          <Col>
                            <Card.Text>
                              Vehicle Type : {e.vehicletype.toUpperCase()}
                            </Card.Text>
                          </Col>
                          <Col>
                            <Card.Text>
                              Journey Type : {e.journeytype.toUpperCase()}
                            </Card.Text>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Card.Text>From : {e.from.toUpperCase()}</Card.Text>
                          </Col>
                          <Col>
                            <Card.Text>To : {e.to.toUpperCase()}</Card.Text>
                          </Col>
                        </Row>
                        <Card.Text>Amount : {e.amount}</Card.Text>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
      </div>
    );
  }
}

export default History;
