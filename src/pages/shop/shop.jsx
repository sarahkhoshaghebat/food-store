import React from "react";
import { PRODUCTS } from "../../data/products";
import { Product } from "./product";
import { Menu } from "../../components/menu/menu";

export const Shop = () => {
  return (
    <React.Fragment>
      <div className="container p-3 mb-5">
        <div className="row">
          {/* تنظیم اندازه ستون‌ها برای نمایش در اندازه‌های مختلف */}
          <div className="col-md-9 col-sm-12">
            <div className="row">
              {PRODUCTS.map((productData) => (
                <Product key={productData.id} data={productData} />
              ))}
            </div>
          </div>
          {/* منوی کناری */}
          <div className="col-md-3 col-sm-12 text-end">
            <div className="row">
              <div className="col-12 p-0">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
