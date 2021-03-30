import React from "react";
import { Col, Form, FormGroup, Input } from "reactstrap";

const CompanyModalBody = () => {
  return (
    <Form>
      <FormGroup row>
        <Col sm={10}>
          <Input type="company" name="company" placeholder="Company" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={10}>
          <Input type="job" name="job" placeholder="Job Title" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={10}>
          <Input type="select" name="type" placeholder="Wishlist">
            <option>Wishlist</option>
            <option>Applied</option>
            <option>Interviewing</option>
            <option>Offer</option>
            <option>Rejected</option>
          </Input>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default CompanyModalBody;
