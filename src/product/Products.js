import React, {Component} from 'react';
import './products.less';
import {NavLink} from "react-router-dom";
import {MdAddCircleOutline} from "react-icons/md";
import {getProductsAction} from "../actions/productAction";
import {connect} from "react-redux";
import {addOrder} from "../api/orders";
import {BASE_STATIC_URL} from "../api/http";
import {reducer} from "../reducers/reducer";

class Products extends Component {

  constructor(props, context) {
    super(props, context);
    this.buyProduct = this.buyProduct.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <main id='productsBox'>
        <ul>
          {this.props.products.map((product, index) => (
            <li key={index}>
              <img src={BASE_STATIC_URL + '/' + product.imageUrl} alt="图片未找到"/>
              <h4 className={'productName'}>{product.name}</h4>
              <div className={'productPrice'}>单价{product.price}元/{product.unit}</div>
              <MdAddCircleOutline className={'addItemIcon'} onClick={() => this.buyProduct(product.id)}/>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  buyProduct(productId) {
    addOrder({
      productId: productId
    })
      .then(response => {
        if (response.ok) {
          alert('添加成功');
        } else {
          response.text().then(errorMessage => {
            alert(errorMessage);
          })
        }
      })
      .catch(() => {
        alert('连接失败')
      })
  }
}

const mapStateToProps = state => ({
  products: state.reducer.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsAction())
})

export default Products = connect(mapStateToProps, mapDispatchToProps)(Products);
