import React from "react";
import { PRODUCTS } from "../data/products";
import { Product } from "../pages/shop/product";
import { Menu } from "../components/menu";

export const Pizza = () => {
  const pizzaProducts = PRODUCTS.filter((product) =>
    product.productName.includes("پیتزا")
  );

  return (
    <React.Fragment>
      <div className="container p-3 pb-5">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <div className="row">
              {pizzaProducts.map((productData) => (
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
