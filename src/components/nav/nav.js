import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";
import "./nav.css";

export const Nav = () => {
  const { cartItems } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-lg-block" href="/">
          Burger Land
        </a>
        {/* دکمه همبرگری */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu} 
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* محتوای ناوبری */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                فروشگاه
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" onClick={() => setIsMenuOpen(false)}>
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
