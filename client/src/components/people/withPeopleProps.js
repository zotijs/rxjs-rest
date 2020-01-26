import { withProps } from "libraries/model";
import { users, isLoading, error } from "models/users/props";
import { fetchUsers } from "models/users/actions";
import { deleteUser } from "models/users/actions";

const withPeopleProps = withProps(
  { users, isLoading, error },
  { fetchUsers, deleteUser }
);

export default withPeopleProps;
