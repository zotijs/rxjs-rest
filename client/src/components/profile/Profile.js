import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser, fetchUserRejected } from "../../actions";
import styles from "./profile.module.css";

const Profile = props => {
  useEffect(
    () => {
      props.fetchUser(props.match.params.id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      {props.user && (
        <div className="ui container">
          <div className="ui centered content">
            <div className={styles.imageContainer}>
              <div className={styles.imageInnerContainer}>
                <img
                  className="ui fluid image"
                  src={props.user.fakeImage}
                  alt="user"
                />
                {/*<i className="image huge grey icon" />*/}
              </div>
            </div>
          </div>
          <h2 className="ui center aligned header">
            <div className="content">
              {`${props.user.name} ${props.user.surename}`}
              <div className="sub header">User</div>
            </div>
          </h2>
          <div className="ui header">About</div>
          <div className="ui description">{props.user.description}</div>
          <div className="ui header">Groups</div>
          <div className="ui grid container">
            <div className="column">
              <button className="ui circular icon button">
                <i className="certificate icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="archive icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="briefcase icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="bullhorn icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="bullseye icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="chart pie icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="coffee icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="compass icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="edit icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="envelope icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="sitemap icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="registered icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="square full icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="bug icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="code icon"></i>
              </button>
              <button className="ui circular icon button">
                <i className="window minimize icon"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ users, usersErrors }, ownProps) => {
  return {
    user: users[ownProps.match.params.id],
    error: usersErrors
  };
};

export default connect(mapStateToProps, { fetchUser, fetchUserRejected })(
  Profile
);
