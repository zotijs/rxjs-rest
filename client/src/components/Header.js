import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="ui center aligned header">
        <div
          className="content"
          style={{
            paddingTop: "10px",
            paddingBottom: "5px",
            borderBottom: "2px solid black"
          }}
        >
          ~ RXJS - REST ~<div className="sub header">les observables</div>
        </div>
      </h1>
    </header>
  );
};

export default Header;
