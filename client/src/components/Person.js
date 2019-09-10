import React from "react";

const Person = props => {
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image">
          <img alt="a person image" src={props.fakeImage} />
        </div>
        <div className="content">
          <div className="header">{`${props.name} ${props.surename}`}</div>
          <div className="meta">
            <a>User</a>
          </div>
          <div className="description">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Person;
