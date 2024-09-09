import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import './product.css';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const isInCart = cartItems?.some((item) => item.id === id);

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-5">
      <div className="card m-3 h-100">
        <img
          src={productImage}
          className="card-img-top img-fluid img-card"
          alt="image-burger"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">{price} تومان</p>
          <div className="mt-auto">
            <button className="btn btn-light btn-sm" onClick={() => addToCart(id)}>
              +
            </button>
            <span className="mx-1 count-card">
              {cartItems?.filter((row) => row.id === id)[0]?.count}
            </span>
            {isInCart && (
              <button
                className="btn btn-light btn-sm btn-card"
                onClick={() => removeFromCart(id)}
              >
                -
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
