import React, { Component } from 'react';
import AddProduct from './AddProduct';
import { Table } from 'reactstrap';

class Cart extends Component {
    render() {
        return (
            <div className='container'>
                <AddProduct addProduct={this.props.onAddProduct} />
                <Table dark striped bordered>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productCart.map(productData => (
                            <tr key={productData.productName}>
                                <td>{productData.productName}</td>
                                <td>{productData.productPrice}</td>
                                <td onClick={() =>
                                this.props.onRemoveProduct(productData)}>Remove</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <span><b>Total Amount:</b> {this.props.totalCost}</span>
            </div>
        )
    }
};

export default Cart;