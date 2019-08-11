import React, {Component} from 'react';
import './orders.less';
import {connect} from "react-redux";
import {getOrdersAction} from "../actions/orderAction";

class Orders extends Component {

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    return (
      <main id={'ordersBox'}>
        <table>
          <thead>
            <tr>
              <td>名字</td>
              <td>单价</td>
              <td>数量</td>
              <td>单位</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
          {this.props.orders.map((order, index) => (
            <tr key={index}>
              <td>{order.productName}</td>
              <td>{order.productPrice}</td>
              <td>{order.amount}</td>
              <td>{order.productUnit}</td>
              <td>
                <button>删除</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.ordersReducer.orders
});

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(getOrdersAction())
})

export default Orders = connect(mapStateToProps, mapDispatchToProps)(Orders);