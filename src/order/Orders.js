import React, {Component} from 'react';
import './orders.less';
import {connect} from "react-redux";
import {getOrdersAction} from "../actions/orderAction";
import {deleteOrder} from "../api/orders";

class Orders extends Component {


  constructor(props, context) {
    super(props, context);
  }

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
          {this.getOrderItems(this.props.orders)}
          </tbody>
        </table>
      </main>
    );
  }

  getOrderItems(orders) {
    if (orders == null || orders.length == 0) {
      return (
        <tr>
          <td>
            暂无订单，返回商城继续购买
          </td>
        </tr>
      )
    } else {
      return orders.map((order, index) => (
        <tr key={index}>
          <td>{order.productName}</td>
          <td>{order.productPrice}</td>
          <td>{order.amount}</td>
          <td>{order.productUnit}</td>
          <td>
            <button onClick={() => this.deleteOrder(order.orderId)}>删除</button>
          </td>
        </tr>
      ))
    }
  }

  deleteOrder(orderId) {
    deleteOrder(orderId)
      .then(response => {
        if (response.ok) {
          alert('删除成功');
          this.props.getOrders();
        } else {
          response.text().then(errorMessage => {
            alert(errorMessage);
          })
        }
      })
      .catch(() => {
        alert('连接失败');
      })
  }
}

const mapStateToProps = state => ({
  orders: state.reducer.orders
});

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(getOrdersAction())
})

export default Orders = connect(mapStateToProps, mapDispatchToProps)(Orders);