import React from "react";
import { PRODUCTS } from "../data/products";
import { Product } from "../pages/shop/product";
import { Menu } from "../components/menu";

export const Drink = () => {
  const keywords = ["نوشابه", "هی دی", "آب معدنی", "دوغ"];
  const drinkProducts = PRODUCTS.filter((product) =>
    keywords.some((keyword) => product.productName.includes(keyword))
  );

  return (
    <React.Fragment>
      <div className="container p-3 mb-5">
        <div className="row">
          <div className="col-lg-9 col-md-8">
            <div className="row">
              {drinkProducts.map((productData) => (
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
