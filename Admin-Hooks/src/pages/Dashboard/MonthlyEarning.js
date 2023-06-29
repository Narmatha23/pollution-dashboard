import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

import ApexRadial from "./ApexRadial"

const MonthlyEarning = () => {
  return (
    <React.Fragment>
      {" "}
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Pollution Analysis</CardTitle>
          <Row>
            <Col sm="6">
              <p className="text-muted">Air Pollution</p>
              <h3>$34,252</h3>
              <p className="text-muted">
                <span className="text-success me-2">
                  {" "}
                  5% <i className="mdi mdi-arrow-up"></i>{" "}
                </span>{" "}
                compared to last month
              </p>
             
            </Col>
            <Col sm="6">
              <div className="mt-4 mt-sm-0">
                <ApexRadial />
              </div>
            </Col>
          </Row>
          <p className="text-muted mb-0">
          We analyze the different types of pollution and their impacts.
          </p>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default MonthlyEarning
