import { withProps } from "libraries/model";
import { usersSelector } from "models/users/props";
import { fetchUsers } from "models/users/actions";
import { deleteUser } from "models/user/actions";

const withPeopleProps = withProps(
  { usersSelector },
  { fetchUsers, deleteUser }
);

export default withPeopleProps;
