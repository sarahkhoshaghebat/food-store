import React from "react";
import { PRODUCTS } from "../../data/products";
import { Product } from "./product";
import { Menu } from "../../components/menu/menu";
import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <div className="container p-3 mb-5">
      <div className="dropdown d-md-none mb-3">
        <button
          className="btn btn-dark dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          منو سفارش
        </button>
        <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
          <li>
            <h5>
              <Link to="/burger" className="menu ">
                برگر
              </Link>
            </h5>
          </li>
          <li>
            <h5>
              <Link to="/pizza" className="menu ">
                پیتزا
              </Link>
            </h5>
          </li>
          <li>
            <h5>
              <Link to="/toast" className="menu ">
                سخاری
              </Link>
            </h5>
          </li>
          <li>
            <h5>
              <Link to="/salad" className="menu ">
                سالاد
              </Link>
            </h5>
          </li>
          <li>
            <h5>
              <Link to="/appetizer" className="menu  ">
                پيش غذا
              </Link>
            </h5>
          </li>
          <li>
            <h5>
              <Link to="/drink" className="menu ">
                نوشیدنی
              </Link>
            </h5>
          </li>
          <li>
            <h4>
              <Link to="/restaurantInformation" className="menu">
                اطلاعات رستوران
              </Link>
            </h4>
          </li>
        </ul>
      </div>
      {/* محتوای اصلی */}
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            {PRODUCTS.map((productData) => (
              <Product key={productData.id} data={productData} />
            ))}
          </div>
        </div>
        <div className="col-md-3 text-end d-none d-md-block">
          <Menu />
        </div>
      </div>
    </div>
  );
};
