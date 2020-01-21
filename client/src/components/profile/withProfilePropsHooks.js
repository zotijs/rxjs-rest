import React, { memo } from "react";
import { useProps } from "libraries/model";
import { userSelector } from "models/user/props";
import { fetchUser } from "models/user/actions";

const withProfileProps = Component => {
  const MemoizedComponent = memo(Component);

  return props => {
    const modelProps = useProps(
      {
        user: userSelector(props.match.params.id)
      },
      {
        fetchUser
      }
    );

    return <MemoizedComponent {...modelProps} {...props} />;
  };
};

export default withProfileProps;
