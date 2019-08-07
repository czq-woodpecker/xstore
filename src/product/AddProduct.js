import React, {Component} from 'react';
import './addProduct.less';
import {addProduct} from "../api/product";

class AddProduct extends Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      price: '',
      unit: '',
      imageUrl: '',
      disableSubmit: true,
      btnClass: 'disableBtn'
    }
    this.setName = this.setName.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.setUnit = this.setUnit.bind(this);
    this.setImageUrl = this.setImageUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <main id={'addProductBox'}>
        <p>添加商品</p>
        <label><span className={'mustItemFlag'}>*&nbsp;</span>名称:</label>
        <input type="text" value={this.state.name} onChange={this.setName}/>
        <label><span className={'mustItemFlag'}>*&nbsp;</span>价格:</label>
        <input type="number" value={this.state.price} onChange={this.setPrice}/>
        <label><span className={'mustItemFlag'}>*&nbsp;</span>单位:</label>
        <input type="text" value={this.state.unit} onChange={this.setUnit}/>
        <label><span className={'mustItemFlag'}>*&nbsp;</span>图片:</label>
        <input type="text" value={this.state.imageUrl} onChange={this.setImageUrl}/>
        <button type='submit' className={this.state.btnClass} onClick={this.handleSubmit}
                disabled={this.state.disableSubmit}>提交
        </button>
      </main>
    );
  }

  setName(event) {
    const name = event.target.value;
    const disableSubmit = name && this.state.price && this.state.unit && this.state.imageUrl ? false : true;
    const btnClass = disableSubmit == true ? 'disableBtn' : 'enableBtn';
    this.setState({
      name: name,
      disableSubmit: disableSubmit,
      btnClass: btnClass
    })
  }

  setPrice(event) {
    const price = event.target.value;
    const disableSubmit = this.state.name && price && this.state.unit && this.state.imageUrl ? false : true;
    const btnClass = disableSubmit == true ? 'disableBtn' : 'enableBtn';
    this.setState({
      price: price,
      disableSubmit: disableSubmit,
      btnClass: btnClass
    })
  }

  setUnit(event) {
    const unit = event.target.value;
    const disableSubmit = this.state.name && this.state.price && unit && this.state.imageUrl ? false : true;
    const btnClass = disableSubmit == true ? 'disableBtn' : 'enableBtn';
    this.setState({
      unit: unit,
      disableSubmit: disableSubmit,
      btnClass: btnClass
    })
  }

  setImageUrl(event) {
    const imageUrl = event.target.value;
    const disableSubmit = this.state.name && this.state.price && this.state.unit && imageUrl ? false : true;
    const btnClass = disableSubmit == true ? 'disableBtn' : 'enableBtn';
    this.setState({
      imageUrl: imageUrl,
      disableSubmit: disableSubmit,
      btnClass: btnClass
    })
  }

  handleSubmit() {
    addProduct({
      name: this.state.name,
      price: this.state.price,
      unit: this.state.unit,
      imageUrl: this.state.imageUrl
    })
      .then(response => {
        if (response.ok) {
          alert('商品添加成功');
        } else {
          response.text().then(errorMessage => {
            alert(errorMessage);
          })
        }
      })
      .catch(error => {
        alert('连接服务器失败');
      })
  }
}

export default AddProduct;
