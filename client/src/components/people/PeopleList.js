import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  fetchUsersRejected,
  deleteUser,
  deleteUserRejected
} from "../../actions";
import Person from "../person/Person";
import styles from "./people.module.css";

const PeopleList = props => {
  useEffect(
    () => {
      props.fetchUsers();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="ui container">
      <div className="ui three column grid container">
        {props.users.map(user => (
          <Person
            key={user._id}
            {...user}
            onUserDelete={id => props.deleteUser(id)}
          />
        ))}
      </div>
      <div className={styles.plusContainer}>
        <button className="ui circular primary icon button huge">
          <i className="plus icon"></i>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: Object.values(state.users),
    errors: state.usersErrors
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
  fetchUsersRejected,
  deleteUser,
  deleteUserRejected
})(PeopleList);
