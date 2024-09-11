import React from "react";
import { PRODUCTS } from "../data/products";
import { Product } from "../pages/shop/product";
import { Menu } from "../components/menu/menu";

export const Salad = () => {
  const saladProducts = PRODUCTS.filter((product) =>
    product.productName.includes("سالاد")
  );
  return (
    <React.Fragment>
      <div className="container p-3 mb-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 text-end">
            <Menu />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="row">
              {saladProducts.map((productData) => (
                <Product key={productData.id} data={productData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
