import { IUserData } from "./interfaces";

interface IProps {
  setIsLoggedIn: (val: boolean) => void;
  userData: IUserData;
  setUserData: (x: IUserData) => void;
}

const Form = ({ setIsLoggedIn, userData, setUserData }: IProps) => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    //⚠️Don't forget to copy userData like here
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    // the form
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {/* Username */}
      <div>
        <label htmlFor="username">username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={userData.username}
          onChange={onChangeHandler}
        />
        <span>typing: ... {userData.username}</span>
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={userData.email}
          onChange={onChangeHandler}
        />
        <span>typing: ... {userData.email}</span>
      </div>

      <div>
        <label htmlFor="address">address: </label>
        <input
          type="text"
          name="address"
          id="address"
          value={userData.address}
          onChange={onChangeHandler}
        />
        <span>typing: ... {userData.address}</span>
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={onChangeHandler}
        />
        <span>typing: ... {userData.password}</span>
      </div>

      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </form>
  );
};

export default Form;
