import React, { memo } from "react";
import { useProps } from "libraries/model";
import { users, isLoading, error } from "models/users/props";
import { fetchUsers } from "models/users/actions";
import { deleteUser } from "models/users/actions";

const withPeopleProps = Component => {
  const MemoizedComponent = memo(Component);

  return props => {
    const modelProps = useProps(
      {
        users,
        isLoading,
        error
      },
      {
        fetchUsers,
        deleteUser
      }
    );

    return <MemoizedComponent {...modelProps} {...props} />;
  };
};

export default withPeopleProps;
