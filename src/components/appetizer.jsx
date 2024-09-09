import React from "react";
import { PRODUCTS } from "../data/products";
import { Product } from "../pages/shop/product";
import { Menu } from "../components/menu";

export const Appetizer = () => {
  const keywords = ["نان", "زمینی", "چیز فرایز"];
  const appetizerProducts = PRODUCTS.filter((product) =>
    keywords.some((keyword) => product.productName.includes(keyword))
  );

  return (
    <React.Fragment>
      <div className="container p-3 mb-5">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <div className="row">
              {appetizerProducts.map((productData) => (
                <Product key={productData.id} data={productData} />
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 text-end">
            <Menu />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
