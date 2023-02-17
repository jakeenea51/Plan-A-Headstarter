import logo from "../components/logo.png";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const HeaderNavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} width={300} height={100} alt="" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/video-meeting" activeStyle>
            Video Meet
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/help" activeStyle>
            Help
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-out">Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default HeaderNavBar;
