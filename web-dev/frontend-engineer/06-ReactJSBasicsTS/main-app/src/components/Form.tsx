import { formInputList } from "../data";
import { IUserData } from "../interfaces";

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

  const renderFormInputList = formInputList.map((input, idx) => (
    <div key={idx}>
      <label htmlFor={input.label}>username: </label>
      <input
        type={input.type}
        name={input.name}
        id={input.id}
        value={userData[input.name]}
        onChange={onChangeHandler}
      />
      <span>typing: ... {userData[input.name]}</span>
    </div>
  ));

  return (
    // the form
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {renderFormInputList}

      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </form>
  );
};

export default Form;
