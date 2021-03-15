import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container } from 'react-bootstrap'
import Bag from '../components/bag/bag'


export default class MyBag extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Container>
					<h1 className="font-weight-bold mt-4 mb-4">My bag</h1>
					<Bag />
				</Container>
			</>
		)
	}
}
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
// import axios from "axios";

import {
  getNewProducts,
  getPopularProducts,
} from "../redux/actionCreators/Product";
import { getCategories } from "../redux/actionCreators/Attribute";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/banner/banner";
import Category from "../components/category/category";
import Products from "../components/products/products";

class Home extends Component {
  getNewProductsDispatch = () => {
    this.props.dispatch(getNewProducts());
  };

  getPopularProductsDispatch = () => {
    this.props.dispatch(getPopularProducts());
  };

  getCategories = () => {
    this.props.dispatch(getCategories());
  };

  componentDidMount = () => {
    this.getNewProductsDispatch();
    this.getPopularProductsDispatch();
    // this.getCategories();
    // this.test();
  };

  render() {
    const { product } = this.props;

    return (
      <>
        <Navbar />
        <Container className="mt-5">
          <Banner />
          <Category />
          <Products
            title="New"
            subtitle="You've never seen it before!"
            products={
              product.newProducts.data && product.newProducts.data.products
            }
          />
          <Products
            title="Popular"
            subtitle="Find clothes that are trending recently"
            products={
              product.popularProducts.data &&
              product.popularProducts.data.products
            }
          />
        </Container>
      </>
    );
  }
}

const mapsStateToProps = ({ product }) => {
  return {
    product,
  };
};

export default connect(mapsStateToProps)(Home);
