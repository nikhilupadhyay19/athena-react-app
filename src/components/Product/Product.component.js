import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { InputBox } from "../../components/InputBox/InputBox.component";
import "./Product.component.styles.css";

export const Product = (props) => {
  const { product, deleteProductHandler, updateProductHandler } = props;

  return (
    <div className="product" id="product">
      <Card>
        {/*<CardImg
          src={product.flag}
          alt={product.name}
          className="product__img"
        />*/}
        <CardBody>
          <CardTitle>
            <CardImg
              src={product.flag}
              alt={product.name}
              className="product__img"
            />{" "}
            {product.name}{" "}
            <i
              className="icofont icofont-airplane"
              style={{ color: "#0091DA", fontSize: "18px" }}
            ></i>
          </CardTitle>
          <InputBox
            labelFor="update search"
            labelClass="product__updatebox-label"
            labelText="Update Product"
            type="text"
            name="text"
            placeholder="Update your products"
            inputClass="product__updatebox"
            handler={updateProductHandler}
            value={product.name}
          />
        </CardBody>
        <Button
          className="product__delete-button"
          onClick={deleteProductHandler}
        >
          <i
            className="icofont icofont-ui-delete"
            style={{ color: "#BC204B", fontSize: "18px" }}
          ></i>
        </Button>
      </Card>
    </div>
  );
};
