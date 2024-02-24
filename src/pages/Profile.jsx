import { useParams } from "react-router-dom";
export const Profile = () => {
  const { name } = useParams();
  return <div>This is profile page of {name}</div>;
};
