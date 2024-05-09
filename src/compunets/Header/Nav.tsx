import LOGO from "../../assets/logo.svg";
import CloseICON from "../../assets/icon-menu-close.svg";
import OpenICON from "../../assets/icon-menu.svg";
import { useState } from "react";
function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="center">
        <div className="nav-inner">
          <img className="logo" src={LOGO} alt="logo" />
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </div>
          <div className={`burger-menu ${open ? "active" : "hidden"}`}>
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src={open ? CloseICON : OpenICON} alt="" />
            </button>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="overlayer"
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
