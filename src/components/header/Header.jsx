import { Nav } from "./Header.style";
import logo from "../../imgs/Icon2.svg";

const Header = (props) => {
  console.log(props);

  return (
    <Nav>
      <a href="/">
        <img src={logo} width="57px" height="18px" alt="Shane Kearney" />
      </a>
    </Nav>
  );
};

export default Header;
