import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchUser, fetchUserRejected } from "models/user/actions";
import styles from "./profile.module.css";

const Profile = ({ match, user, fetchUser }) => {
  useEffect(
    () => {
      fetchUser(match.params.id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      {user && (
        <div className="ui container">
          <div className="ui centered content">
            <div className={styles.imageContainer}>
              <div className={styles.imageInnerContainer}>
                <img
                  className="ui fluid image"
                  src={user.fakeImage}
                  alt="user"
                />
                {/*<i className="image huge grey icon" />*/}
              </div>
            </div>
          </div>
          <h2 className="ui center aligned header">
            <div className="content">
              {`${user.name} ${user.surename}`}
              <div className="sub header">User</div>
            </div>
          </h2>
          <div className="ui header">About</div>
          <div className="ui description">{user.description}</div>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

// const mapStateToProps = ({ userReducer }, ownProps) => {
//   return {
//     user: userReducer ? userReducer[ownProps.match.params.id] : {} //,
//     //error: usersErrors
//   };
// };

// export default connect(mapStateToProps, { fetchUser, fetchUserRejected })(
//   Profile
// );
