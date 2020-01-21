import { withProps } from "libraries/model";
import { userSelector } from "models/user/props";
import { fetchUser } from "models/user/actions";

const withProfileProps = withProps({ userSelector }, { fetchUser });

export default withProfileProps;
