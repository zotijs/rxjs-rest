import React from "react";
import { connect } from "react-redux";

const App = props => {
  console.log(props);
  return (
    <div>
      <p>Helloooooo there</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
