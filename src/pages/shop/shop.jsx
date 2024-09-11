import React from "react";
import { PRODUCTS } from "../../data/products";
import { Product } from "./product";
import { Menu } from "../../components/menu/menu";

export const Shop = () => {
  return (
    <React.Fragment>
      <div className="container p-3 mb-5">
        <div className="row">
          {/* منو در سمت چپ یا بالای صفحه */}
          <div className="col-md-3 text-end">
            <Menu />
          </div>
          {/* بخش محصولات در سمت راست یا زیر منو */}
          <div className="col-md-9">
            <div className="row">
              {PRODUCTS.map((productData) => (
                <Product key={productData.id} data={productData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
