import React from "react";
import { Link } from "react-router-dom";
import'./menu.css';

export const Menu = () => {

  return (
    <>
    <div className="sideBar mb-5">
        <div className="container mb-5 menu-item">
          <div className="row mb-3">
            <h3>منو سفارش</h3>
          </div>
            <div className="col-12 mb-2">
              <h5>
                <Link to="/burger" className="menu ">
                  برگر
                </Link>
              </h5>
          </div>
            <div className="col-12 mb-2">
              <h5>
                <Link to="/pizza" className="menu ">
                  پیتزا
                </Link>
              </h5>
          </div>
            <div className="col-12 mb-2">
              <h5>
                <Link to="/toast" className="menu ">
                  سخاری
                </Link>
              </h5>
          </div>
            <div className="col-12 mb-2">
              <h5>
                <Link to="/salad" className="menu ">
                  سالاد
                </Link>
              </h5>
          </div>
            <div className="col-12 mb-2">
              <h5>
                <Link to="/appetizer" className="menu  ">
                  پيش غذا
                </Link>
              </h5>
          </div>
            <div className="col-12 mb-2">
              <h5>
                <Link to="/drink" className="menu ">
                  نوشیدنی{" "}
                </Link>
              </h5>
          </div>
            <div className="col-12 mb-2">
              <h4>
                <Link to="/restaurantInformation" className="menu">
                  اطلاعات رستوران
                </Link>
              </h4>
          </div>
          </div>
        </div>
    </>
  );
};
