import { CartWidget } from "../../common/CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <img src="https://res.cloudinary.com/djnnbue6k/image/upload/v1728255035/logoReact_mumxed.jpg"></img>
      <ul>
        <li>INICIO</li>
        <li>PRODUCTOS</li>
        <li>SERVICIOS</li>
        <li>CONTACTOS</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
