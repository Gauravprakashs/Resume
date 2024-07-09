import { NAVBAR_TITLE, navOptions } from "../../Constants/index.js";
import "./Navbar.css";

function NavOption(props) {
  return <p>{props.navItem}</p>;
}

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_left">{NAVBAR_TITLE}</div>
      <div className="navbar_right">
        {navOptions.map((item) => (
          <NavOption key={item} navItem={item} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
