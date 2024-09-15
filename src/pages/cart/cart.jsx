import { useContext} from "react";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../data/products";
import { Product } from "../shop/product";
import React from "react";

export const Cart = () => {
  const { cartItems = [], deleteCart, checkout } = useContext(ShopContext);
  const parsePrice = priceString => parseFloat(priceString.replace(/,/g, ''));

  const totalItems = cartItems.reduce((total, item) => {
    return total + item.count;
  }, 0);
  
  const totalPrice = cartItems.reduce((total, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    const productPrice = product ? parsePrice(product.price) : 0;
    return total + (productPrice * item.count);
  }, 0);
  

  const hasItemsInCart = cartItems && cartItems.some((item) => item.count > 0);

  return (
    <>
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-12">
            <h1>سبد خرید شما</h1>
            <div className="row">
              {PRODUCTS.map((p) => {
                if (cartItems?.some((i) => i.id === p.id && i.count > 0)) {
                  return <Product key={p.id} data={p} />;
                }
                return null;
              })}
            </div>
          </div>
        </div>
        {hasItemsInCart && (
          <div className="row justify-content-center mt-4 mb-5">
            <div className="row mb-5">
              <div className="col-12">
                <h4>تعداد کل اقلام  :{totalItems} </h4>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12">
                <h4>مبلغ قابل پرداخت :{totalPrice.toLocaleString()} </h4>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <button
                className="btn btn-outline-success w-100 mb-3"
                onClick={checkout}
              >
                تکمیل فرآیند خرید
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button
                className="btn btn-outline-danger w-100 mb-3"
                onClick={deleteCart}
              >
                حذف سبد خرید
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
