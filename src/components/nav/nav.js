import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import "./nav.css";

export const Nav = () => {
  const { cartItems } = useContext(ShopContext);
  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-none d-lg-block" href="/">
          Burger Land
        </a>
        {/* دکمه همبرگری */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* محتوای ناوبری */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                فروشگاه
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} />
                {itemCount > 0 && (
                  <span className="cart-items-count">{itemCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
