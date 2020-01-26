import React, { memo } from "react";
import { useProps } from "libraries/model";
import { user, isLoading, error } from "models/user/props";
import { fetchUser } from "models/user/actions";

const withProfileProps = Component => {
  const MemoizedComponent = memo(Component);

  return props => {
    const modelProps = useProps(
      {
        user: user(props.match.params.id),
        isLoading,
        error
      },
      {
        fetchUser
      }
    );

    return <MemoizedComponent {...modelProps} {...props} />;
  };
};

export default withProfileProps;
