import { ChangeProfile } from "../Components/ChangeProfile";
export const Profile = (props) => {
  return (
    <div>
      This is profile page - username is {props.username}
      <ChangeProfile />
    </div>
  );
};
