import { withProps } from "libraries/model";
import { user, isLoading, error } from "models/user/props";
import { fetchUser } from "models/user/actions";

const withProfileProps = withProps({ user, isLoading, error }, { fetchUser });

export default withProfileProps;
