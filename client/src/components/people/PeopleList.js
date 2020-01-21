import React, { useEffect } from "react";
import { Person } from "./components";
import styles from "./people.module.css";

const PeopleList = ({ usersSelector, fetchUsers, deleteUser }) => {
  useEffect(
    () => {
      fetchUsers();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="ui container">
      <div className="ui three column grid container">
        {usersSelector &&
          usersSelector.map(user => (
            <Person
              key={user._id}
              {...user}
              onUserDelete={id => deleteUser(id)}
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

export default PeopleList;
