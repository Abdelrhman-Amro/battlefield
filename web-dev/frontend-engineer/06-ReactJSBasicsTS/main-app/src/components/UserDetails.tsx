import { IUserData } from "./interfaces";

interface IProps {
  user: IUserData;
}
const UserDetails = ({ user }: IProps) => {
  return (
    <div>
      <h3>username: {user.username}</h3>
      <h3>email: {user.address}</h3>
      <h3>pass: {user.email}</h3>
      <h3>address: {user.password}</h3>
    </div>
  );
};

export default UserDetails;
