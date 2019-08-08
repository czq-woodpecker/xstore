import React, {Component} from 'react';
import './products.less';
import {NavLink} from "react-router-dom";
import {MdAddCircleOutline} from "react-icons/md";
import {productReducer} from "../reducers/productReducer";
import {getProductsAction} from "../actions/productAction";
import {connect} from "react-redux";
import {BASE_STATIC_URL} from "../api/product";

class Products extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    console.log(this.props.products);
    const products = this.props.products;
    return (
      <main id='productsBox'>
        <ul>
          {this.props.products.map((product, index) => (
            <li key={index}>
              <img src={BASE_STATIC_URL + '/' + product.imageUrl} alt="图片未找到"/>
              <h4 className={'productName'}>{product.name}</h4>
              <div className={'productPrice'}>单价{product.price}元/{product.unit}</div>
              <MdAddCircleOutline className={'addItemIcon'} />
            </li>
          ))}

          {/*<li>*/}
          {/*  <img src="http://localhost:8080/images/iphonex.jpg" alt="图片未找到"/>*/}
          {/*  <h4 className={'productTitle'}>苹果</h4>*/}
          {/*  <div className={'productPrice'}>单价1元/瓶</div>*/}
          {/*  <MdAddCircleOutline className={'addItemIcon'}></MdAddCircleOutline>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <img src="http://localhost:8080/images/iphonex.jpg" alt="图片未找到"/>*/}
          {/*  <h4 className={'productTitle'}>苹果</h4>*/}
          {/*  <div className={'productPrice'}>单价1元/瓶</div>*/}
          {/*  <MdAddCircleOutline className={'addItemIcon'}></MdAddCircleOutline>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <img src="http://localhost:8080/images/iphonex.jpg" alt="图片未找到"/>*/}
          {/*  <h4 className={'productTitle'}>苹果</h4>*/}
          {/*  <div className={'productPrice'}>单价1元/瓶</div>*/}
          {/*  <MdAddCircleOutline className={'addItemIcon'}></MdAddCircleOutline>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <img src="http://localhost:8080/images/iphonex.jpg" alt="图片未找到"/>*/}
          {/*  <h4 className={'productTitle'}>苹果</h4>*/}
          {/*  <div className={'productPrice'}>单价1元/瓶</div>*/}
          {/*  <MdAddCircleOutline className={'addItemIcon'}></MdAddCircleOutline>*/}
          {/*</li>*/}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productReducer.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsAction())
})

export default Products = connect(mapStateToProps, mapDispatchToProps)(Products);
