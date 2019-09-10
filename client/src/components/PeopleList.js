import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchUsersRejected } from "../actions";
import Person from "./Person";

const PeopleList = props => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div className="ui three column grid container">
      {props.users.map(user => (
        <Person key={user._id} {...user} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: Object.values(state.users),
    errors: state.usersErrors
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers, fetchUsersRejected }
)(PeopleList);
