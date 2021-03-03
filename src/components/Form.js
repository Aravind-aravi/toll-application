import React, { Component } from "react";
import {
  Button,
  Col,
  InputGroup,
  Form,
  Card,
  Row,
  Container,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { Formik } from "formik";
import History from "./History";
export default class TollForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [
        {
          id: 1,
          vehiclenumber: "TN14Ap768",
          licencenumber: "TN7575522",
          from: "Chennai",
          to: "mumbai",
          vehicletype: "Bus",
          journeytype: "single",
          amount: "60",
          date: new Date().toLocaleString(),
        },
        {
          id: 2,
          vehiclenumber: "TN41Ap768",
          licencenumber: "TN7575522",
          from: "Chennai",
          to: "mumbai",
          vehicletype: "Bus",
          journeytype: "single",
          amount: "60",
          date: new Date().toLocaleString(),
        },
        {
          id: 3,
          vehiclenumber: "TN24Ap768",
          licencenumber: "TN7575522",
          from: "Chennai",
          to: "mumbai",
          vehicletype: "Bus",
          journeytype: "single",
          amount: "60",
          date: new Date().toLocaleString(),
        },
      ],
      search: null,
      values: {
        id: "",
        vehiclenumber: "",
        licencenumber: "",
        from: "",
        to: "",
        vehicletype: "",
        journeytype: "",
        amount: "",
        date: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const arrcpy = [...this.state.vehicles];
    arrcpy.push(this.state.values);
    this.setState(
      (state) => ({ vehicles: arrcpy }),
      () => {
        this.props.history.push({
          pathname: "/history",
          state: this.state.vehicles,
        });
      }
    );

    for (let index = 0; index < 7; index++) {
      this.setState((state) => ({
        values: { ...state.values, [e.target[index].name]: "" },
      }));
    }

    alert("Successfully added");
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}-${value}`);

    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
        id: Math.round(Math.random() * 1000),
        date: new Date().toLocaleString(),
      },
    }));
  };

  render() {
    const schema = yup.object().shape({
      vehiclenumber: yup.string().required(),
      lastName: yup.string().required(),
      username: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      zip: yup.string().required(),
      terms: yup
        .bool()
        .required()
        .oneOf([true], "Terms must be accepted"),
    });
    return (
      <Container fluid style={{ backgroundColor: "#2c3f61", height: "91.2vh" }}>
        <Row>
          <Col sm={7}>
            <img
              src="/assets/toll10.png"
              style={{ width: "57vw", height: "90vh" }}
            />

            {/* <History vehicles={this.state.vehicles} /> */}
          </Col>

          <Col sm={5}>
            <Card
              className="form-card"
              style={{
                marginTop: "50px",
                paddingBottom: "10px",
              }}
            >
              <Formik validationSchema={schema} onSubmit={this.handleSubmit}>
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                }) => (
                  <Form noValidate onSubmit={this.handleSubmit}>
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik01"
                      >
                        <Form.Label>Vehicle Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="vehiclenumber"
                          value={this.state.values.vehiclenumber}
                          onChange={this.handleChange}
                          isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik02"
                      >
                        <Form.Label>Licence Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="licencenumber"
                          onChange={this.handleChange}
                          value={this.state.values.licencenumber}
                          isValid={touched.lastName && !errors.lastName}
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik01"
                      >
                        <Form.Label>From</Form.Label>
                        <Form.Control
                          type="text"
                          name="from"
                          onChange={this.handleChange}
                          value={this.state.values.from}
                          isValid={touched.firstName && !errors.firstName}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik02"
                      >
                        <Form.Label>To</Form.Label>
                        <Form.Control
                          type="text"
                          name="to"
                          onChange={this.handleChange}
                          value={this.state.values.to}
                          isValid={touched.lastName && !errors.lastName}
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik01"
                      >
                        <Form.Label>Vehicle Type</Form.Label>
                        <Form.Control
                          as="select"
                          name="vehicletype"
                          onChange={this.handleChange}
                          value={this.state.values.vehicletype}
                          isValid={touched.firstName && !errors.firstName}
                        >
                          <option>choose...</option>
                          <option value="bike">Bike</option>
                          <option value="car">Car</option>
                          <option value="truck">Truck</option>
                          <option value="bus">Bus</option>
                          <option value="jeep">Jeep</option>

                          <option value="van">Van</option>
                        </Form.Control>

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik02"
                      >
                        <Form.Label>Journey Type</Form.Label>
                        <Form.Control
                          as="select"
                          name="journeytype"
                          value={this.state.values.journeytype}
                          onChange={this.handleChange}
                          defaultValue="Choose..."
                          isValid={touched.lastName && !errors.lastName}
                        >
                          {" "}
                          <option>choose...</option>
                          <option value="single">Single</option>
                          <option value="return">Return</option>
                        </Form.Control>

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Group>
                      <Form.Label>
                        Amount:
                        <Form.Control
                          type="text"
                          name="amount"
                          onChange={this.handleChange}
                          value={this.state.values.amount}
                          isValid={touched.firstName && !errors.firstName}
                        />
                      </Form.Label>
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                  </Form>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
