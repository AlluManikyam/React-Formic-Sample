import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { DisplayFormikState } from "./DisplayFormicState";
import { Formik } from "formik";
import * as Yup from "yup";

import "../css/formic-custom.css";

class Registration extends Component {
  submitForm(values, { setSubmitting }) {
    setTimeout(() => {
      alert(
        "Hello your submitted values are" + JSON.stringify(values, null, 2)
      );
      setSubmitting(false);
    }, 500);
  }
  render() {
    return (
      <div className="container">
        <h2 className="mx-5 text-center"> Registration</h2>
        <div className="btn btn-sm text-left d-flex justify-content-center ">
          <Formik
            initialValues={{
              email: "",
              password: "",
              address1: "",
              address2: "",
              city: "",
              state: "",
              zipcode: "",
              termsAccepted: false
            }}
            onSubmit={this.submitForm}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email()
                .required("Email must be required"),
              password: Yup.string().required("Password must be required"),
              address1: Yup.string().required("Address1 must be required"),
              address2: Yup.string().required("Address2 must be required"),
              city: Yup.string().required("City must be required"),
              state: Yup.string().required("State must be required"),
              zipcode: Yup.string().required("Zipcode must be required"),
              termsAccepted: Yup.bool()
                .test(
                  "termsAccepted",
                  "You have to agree with our Terms and Conditions!",
                  value => value === true
                )
                .required("You have to agree with our Terms and Conditions!")
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset
              } = props;
              return (
                <React.Fragment>
                  <Form
                    className="border border-dark p-3"
                    onSubmit={handleSubmit}
                  >
                    <Form.Row>
                      <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.email && touched.email
                              ? "text-input error"
                              : "text-input"
                          }
                        />
                        {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                        )}
                      </Form.Group>

                      <Form.Group as={Col} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.password && touched.password
                              ? "text-input error"
                              : "text-input"
                          }
                          type="password"
                          placeholder="Password"
                        />
                        {errors.password && touched.password && (
                          <div className="input-feedback">
                            {errors.password}
                          </div>
                        )}
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="address1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        placeholder="1234 Main St"
                        value={values.address1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.address1 && touched.address1
                            ? "text-input error"
                            : "text-input"
                        }
                      />
                      {errors.address1 && touched.address1 && (
                        <div className="input-feedback">{errors.address1}</div>
                      )}
                    </Form.Group>

                    <Form.Group controlId="address2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control
                        placeholder="Apartment, studio, or floor"
                        value={values.address2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.address2 && touched.address2
                            ? "text-input error"
                            : "text-input"
                        }
                      />
                      {errors.address2 && touched.address2 && (
                        <div className="input-feedback">{errors.address2}</div>
                      )}
                    </Form.Group>

                    <Form.Row>
                      <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          placeholder="City"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.city && touched.city
                              ? "text-input error"
                              : "text-input"
                          }
                        />
                        {errors.city && touched.city && (
                          <div className="input-feedback">{errors.city}</div>
                        )}
                      </Form.Group>

                      <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          className={
                            errors.state && touched.state
                              ? "text-input error"
                              : "text-input"
                          }
                          as="select"
                          placeholder="state"
                          value={values.state}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Choose...</option>
                          <option>Andhra Pradesh</option>
                          <option>Visakhapatnam</option>
                          <option>Vizianagaram</option>
                        </Form.Control>
                        {errors.state && touched.state && (
                          <div className="input-feedback">{errors.state}</div>
                        )}
                      </Form.Group>

                      <Form.Group as={Col} controlId="zipcode">
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control
                          placeholder="Zipcode"
                          value={values.zipcode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.zipcode && touched.zipcode
                              ? "text-input error"
                              : "text-input"
                          }
                        />
                        {errors.zipcode && touched.zipcode && (
                          <div className="input-feedback">{errors.zipcode}</div>
                        )}
                      </Form.Group>
                    </Form.Row>

                    <Form.Group id="termsAccepted">
                      <Form.Check
                        type="checkbox"
                        name="termsAccepted"
                        checked={values.termsAccepted}
                        label="Check me out"
                        value={values.termsAccepted}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.termsAccepted && touched.termsAccepted
                            ? "text-input error"
                            : "text-input"
                        }
                      />
                      {errors.termsAccepted && touched.termsAccepted && (
                        <div className="input-feedback">
                          {errors.termsAccepted}
                        </div>
                      )}
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                      <Button
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                        className="px-4"
                        variant="danger"
                        type="submit"
                      >
                        Reset
                      </Button>
                      <Button
                        className="px-3"
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                  <DisplayFormikState props={props} />
                </React.Fragment>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Registration;
