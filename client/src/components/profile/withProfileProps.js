import { withProps } from "libraries/model";
import { user, isLoading, error } from "models/user/props";
import { fetchUser } from "models/user/actions";

const withProfileProps = withProps(
  {
    user: (state, { match }) => user(match.params.id)(state),
    isLoading,
    error
  },
  { fetchUser }
);

export default withProfileProps;
