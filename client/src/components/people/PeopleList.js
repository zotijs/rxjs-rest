import React from "react";
import useFetch from "libraries/useFetch";
import { Person } from "./components";
import { Loader, ErrorCmp } from "components/common";
import styles from "./people.module.css";

const PeopleList = ({ users, isLoading, error, fetchUsers, deleteUser }) => {
  useFetch(fetchUsers);

  if (isLoading) return <Loader />;
  if (error) return <ErrorCmp {...error} />;

  return (
    <div className="ui container">
      <div className="ui three column grid container">
        {users &&
          users.map(user => (
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
