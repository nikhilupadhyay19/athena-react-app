import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./ProductPage.styles.css";

import { ProductList } from "../../components/ProductList/ProductList.component";
import { InputBox } from "../../components/InputBox/InputBox.component";
import { SelectBox } from "../../components/SelectBox/SelectBox.component";

const regions = [
  {
    value: "AllRegion",
    name: "All Regions",
  },
  {
    value: "Asia",
    name: "Asia",
  },
  {
    value: "Europe",
    name: "Europe",
  },
  {
    value: "Africa",
    name: "Africa",
  },
  {
    value: "Oceania",
    name: "Oceania",
  },
  {
    value: "Americas",
    name: "Americas",
  },
  {
    value: "Polar",
    name: "Polar",
  },
  {
    value: "",
    name: "No Region",
  },
];

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productSearchField: "",
      regionSelectField: regions[0].value,
    };
  }

  componentDidMount() {
    const getProducts = (url) => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong!!! Try Again");
          }
          return res.json();
        })
        .then((data) => {
          const products = [...data];
          this.setState((prevState, prevProps) => {
            return (prevState.products = products);
          });
        });
    };
    getProducts("https://restcountries.eu/rest/v2/all");
  }

  deleteProductHandler = (id) => {
    const products = [...this.state.products];
    const productIndex = products.findIndex((elem) => elem.alpha3Code === id);
    products.splice(productIndex, 1);

    this.setState((prevState, prevProps) => {
      return (prevState.products = products);
    });
  };

  searchProductHandler = (e) => {
    const value = e.target.value;

    this.setState((prevState, prevProps) => {
      return (prevState.productSearchField = value);
    });
  };

  updateProductHandler = (e, id) => {
    const value = e.target.value;
    const products = [...this.state.products];
    const productIndex = products.findIndex((elem) => elem.alpha3Code === id);

    const product = Object.assign({}, products[productIndex]);
    product.name = value;

    products[productIndex] = product;

    this.setState((prevState, prevProps) => {
      return (prevState.products = products);
    });
  };

  selectRegionHandler = (e) => {
    const value = e.target.value;
    this.setState((prevState, prevProps) => {
      return (prevState.regionSelectField = value);
    });
  };

  render() {
    const { products, productSearchField, regionSelectField } = this.state;
    console.log(products);

    let filterProducts = null;

    if (regionSelectField === regions[0].value) {
      filterProducts = products.filter(
        (elem) =>
          elem.name.toLowerCase().indexOf(productSearchField.toLowerCase()) !==
          -1
      );
    } else {
      filterProducts = products.filter(
        (elem) =>
          elem.name.toLowerCase().indexOf(productSearchField.toLowerCase()) !==
            -1 && elem.region === regionSelectField
      );
    }

    // const filterProducts = products.filter(
    //   (elem) =>
    //     elem.name.toLowerCase().includes(productSearchField.toLowerCase())
    //     elem.name.toLowerCase().indexOf(productSearchField.toLowerCase()) !==
    //       -1 && elem.region === regionSelectField
    // );
    // console.log(filterProducts);

    return (
      <div className="product__page" id="product_page">
        <Container>
          <Row>
            <Col md={12} className="m-bt-1p5">
              <Row>
                <Col md={4}>
                  <SelectBox
                    labelFor="region select"
                    labelClass="region__selectbox-label"
                    labelText="Select Region"
                    id="region_selectbox"
                    inputClass="region__selecthbox"
                    handler={this.selectRegionHandler}
                    options={regions}
                  />
                </Col>
                <Col md={4}>
                  <InputBox
                    labelFor="product search"
                    labelClass="product__searchbox-label"
                    labelText="Search Products"
                    type="search"
                    name="search"
                    id="product_searchbox"
                    placeholder="Search your products"
                    inputClass="product__searchbox"
                    handler={this.searchProductHandler}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={12}>
              <ProductList
                products={filterProducts}
                deleteProductHandler={this.deleteProductHandler}
                updateProductHandler={this.updateProductHandler}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductPage;
