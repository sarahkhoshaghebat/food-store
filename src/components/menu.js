import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="toggle-btn btn btn-outline-dark"
        onClick={toggleSidebar}
      >
        {isOpen ? "بستن منو" : "باز کردن منو"}
      </button>
      <div className={`sideBar ${isOpen ? "open" : ""}`}>
        <div className="container">
          <div className="row mb-3">
            <h3>منو سفارش</h3>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link
                  to="/burger"
                  className="menu link-underline-light text-body-emphasis"
                >
                  برگر
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link
                  to="/pizza"
                  className="menu link-underline-light text-body-emphasis"
                >
                  پیتزا
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link
                  to="/toast"
                  className="menu link-underline-light text-body-emphasis"
                >
                  سخاری
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link
                  to="/salad"
                  className="menu link-underline-light text-body-emphasis"
                >
                  سالاد
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link
                  to="/appetizer"
                  className="menu link-underline-light text-body-emphasis"
                >
                  پيش غذا
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h5>
                <Link
                  to="/drink"
                  className="menu link-underline-light text-body-emphasis"
                >
                  نوشیدنی{" "}
                </Link>
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2 menu-item">
              <h4>
                <Link
                  to="/restaurantInformation"
                  className="link-underline-primary"
                >
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
