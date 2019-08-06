import React, {Component} from 'react';
import './header.less';
import {NavLink} from "react-router-dom";
import {MdHome} from "react-icons/md";
import {MdAddShoppingCart} from "react-icons/md";
import {MdAdd} from "react-icons/md";

class Header extends Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <NavLink to={'/products'} className={'menuLink'} activeClassName={'menuActive'}>
              <MdHome className={'iconStyle'}></MdHome>
              商城
            </NavLink>
          </li>
          <li>
            <NavLink to={'/orders'} className={'menuLink'} activeClassName={'menuActive'}>
              <MdAddShoppingCart className={'iconStyle'}></MdAddShoppingCart>
              订单
            </NavLink>
          </li>
          <li>
            <NavLink to={'/product/add'} className={'menuLink'} activeClassName={'menuActive'}>
              <MdAdd className={'iconStyle'}></MdAdd>
              添加商品
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
