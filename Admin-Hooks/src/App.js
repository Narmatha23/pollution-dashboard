import PropTypes from 'prop-types';
import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { authProtectedRoutes } from "./routes";
import Authmiddleware from "./routes/route";
import HorizontalLayout from "./components/HorizontalLayout/";
import "./assets/scss/theme.scss";
import fakeBackend from "./helpers/AuthType/fakeBackend"
fakeBackend()

const App = props => {

  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authProtectedRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={HorizontalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

App.propTypes = {
  layout: PropTypes.any
};

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);
