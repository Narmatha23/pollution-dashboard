import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Container, Row, Col, Button, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

import classNames from "classnames"

// Import Charts
import PieChart from "../AllCharts/apex/PieChart"
import LineChart from "../AllCharts/apex/dashedLine"
import StackedColumnChart from "./StackedColumnChart"

// Import action
import { getChartsData as onGetChartsData } from "../../store/actions"

// Import images
import modalimage1 from "../../assets/images/product/img-7.png"
import modalimage2 from "../../assets/images/product/img-4.png"

// Pages Components
import WelcomeComp from "./WelcomeComp"
import MonthlyEarning from "./MonthlyEarning"
import SocialSource from "./SocialSource"
import ActivityComp from "./ActivityComp"
import TopCities from "./TopCities"

// Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// i18n
import { withTranslation } from "react-i18next"

// Redux
import { useSelector, useDispatch } from "react-redux"

const Dashboard = props => {
  const [modal, setModal] = useState(false)
  const [subscribemodal, setSubscribemodal] = useState(false)
  const [chartType, setChartType] = useState("bar")
  const [periodData, setPeriodData] = useState([])
  const [periodType, setPeriodType] = useState("yearly")

  const { chartsData } = useSelector(state => ({
    chartsData: state.Dashboard.chartsData,
  }))

  const reports = [
    { title: "Air Pollution", iconClass: "bx-cloud", description: "78%" },
    { title: "Water Pollution", iconClass: "bx-droplet", description: "42%" },
    {
      title: "Noise Pollution",
      iconClass: "bx-volume-full",
      description: "23%",
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setSubscribemodal(true)
    }, 2000)
  }, [])

  useEffect(() => {
    setPeriodData(chartsData)
  }, [chartsData])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(onGetChartsData("yearly"))
  }, [dispatch])

  const onChangeChartPeriod = pType => {
    setPeriodType(pType)
    dispatch(onGetChartsData(pType))
  }

  const toggleChartType = () => {
    setChartType(prevType => {
      if (prevType === "bar") {
        return "line"
      } else if (prevType === "line") {
        return "pie"
      } else {
        return "bar"
      }
    })
  }

  // Meta title
  document.title = "Dashboard | React Admin & Dashboard "

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Dashboards")}
            breadcrumbItem={props.t("Dashboard")}
          />

          <Row>
            <Col xl="4">
              <WelcomeComp />
              <MonthlyEarning />
            </Col>
            <Col xl="8">
              <Row>
                {/* Reports Render */}
                {reports.map((report, key) => (
                  <Col md="4" key={"_col_" + key}>
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              {report.title}
                            </p>
                            <h4 className="mb-0">{report.description}</h4>
                          </div>
                          <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                            <span className="avatar-title rounded-circle bg-primary">
                              <i
                                className={
                                  "bx " + report.iconClass + " font-size-24"
                                }
                              ></i>
                            </span>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Card>
                <CardBody>
                  <div className="d-sm-flex flex-wrap">
                    <h4 className="card-title mb-4">
                      {" "}
                      <Button onClick={toggleChartType}>
                        Toggle Chart Type
                      </Button>
                    </h4>
                    <div className="ms-auto">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <Link
                            to="#"
                            className={classNames(
                              { active: periodType === "weekly" },
                              "nav-link"
                            )}
                            onClick={() => {
                              onChangeChartPeriod("weekly")
                            }}
                            id="one_month"
                          >
                            Week
                          </Link>{" "}
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            className={classNames(
                              { active: periodType === "monthly" },
                              "nav-link"
                            )}
                            onClick={() => {
                              onChangeChartPeriod("monthly")
                            }}
                            id="one_month"
                          >
                            Month
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            className={classNames(
                              { active: periodType === "yearly" },
                              "nav-link"
                            )}
                            onClick={() => {
                              onChangeChartPeriod("yearly")
                            }}
                            id="one_month"
                          >
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="clearfix"></div> */}
                  {chartType === "bar" ? (
                    <StackedColumnChart periodData={periodData} />
                  ) : chartType === "line" ? (
                    <LineChart periodType={periodType} />
                  ) : (
                    <PieChart periodData={periodData} />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl="4">
              <SocialSource />
            </Col>
            <Col xl="4">
              <ActivityComp />
            </Col>

            <Col xl="4">
              <TopCities />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}

export default withTranslation()(Dashboard)
