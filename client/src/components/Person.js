import React from "react";
import { Link } from "react-router-dom";

const Person = props => {
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img alt="a person image" src={props.fakeImage} />
        </div>
        <div className="content">
          <div className="header">
            <Link
              to={`/users/${props._id}`}
            >{`${props.name} ${props.surename}`}</Link>
          </div>
          <div className="meta">User</div>
        </div>
        <div className="extra content">
          <span className="left floated">
            <Link to={`/users/${props._id}`}>
              <i className="edit icon"></i>
              Edit
            </Link>
          </span>
          <span className="right floated">
            <Link>
              <i className="close icon"></i>
              Delete
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Person;
