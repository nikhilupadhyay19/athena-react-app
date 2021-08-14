import React from "react";
import { Row, Col } from "reactstrap";
import { Product } from "../Product/Product.component";

import "./ProductList.component";

export const ProductList = (props) => {
  const { products, deleteProductHandler, updateProductHandler } = props;

  return (
    <div className="product__list" id="product_list">
      <Row>
        {products.map((elem) => {
          return (
            <Col md={4} className="m-bt-1p5" key={elem.alpha3Code}>
              <Product
                product={elem}
                deleteProductHandler={() =>
                  deleteProductHandler(elem.alpha3Code)
                }
                updateProductHandler={(e) =>
                  updateProductHandler(e, elem.alpha3Code)
                }
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
