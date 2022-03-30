import logo from "./img/logo.png";
import { Link, Outlet } from "react-router-dom";
import "./main.css";
const Main = () => {
  return (
 <div>  
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Ofertas</Link>
          </li>
          <li>
            <Link to="/">Full Days</Link>
          </li>
          <li>
            <Link to="/">Alojamiento</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
</div>
 );
};

export default Main;