import React, { useState } from "react";
import { Link } from "react-router-dom";
import'./menu.css';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="toggle-btn btn btn-outline-danger"
        onClick={toggleButton}
      >
        {isOpen ? " باز کردن منو" : "بستن منو"}
      </button>
      <div className={`sideBar${isOpen ? "open" : ""}`}>
        <div className="container ">
          <div className="row mb-3">
            <h3>منو سفارش</h3>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link to="/burger" className="menu ">
                  برگر
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link to="/pizza" className="menu ">
                  پیتزا
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link to="/toast" className="menu ">
                  سخاری
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link to="/salad" className="menu ">
                  سالاد
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link to="/appetizer" className="menu  ">
                  پيش غذا
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link to="/drink" className="menu ">
                  نوشیدنی{" "}
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h4>
                <Link to="/restaurantInformation" className="menu">
                  اطلاعات رستوران
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
