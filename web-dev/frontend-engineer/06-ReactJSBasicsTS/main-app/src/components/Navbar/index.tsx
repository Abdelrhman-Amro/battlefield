interface IProps {
  companyName: string;
  aboutTxt: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}

const Navbar = ({
  companyName,
  aboutTxt,
  isLoggedIn,
  setIsLoggedIn,
}: IProps) => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          listStyle: "none",
          padding: "1.5rem",
          backgroundColor: "#bf4080",
          borderRadius: 25,
          fontSize: "1.2rem",
        }}
      >
        <li>
          <a href="">{companyName}</a>
        </li>
        <li>
          <a href="">{aboutTxt}</a>
        </li>
        <li>
          <a href="">info</a>
        </li>
        <li>
          <a href="">Contat</a>
        </li>
        <li>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
