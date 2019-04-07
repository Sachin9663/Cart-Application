import React, {Component} from 'react';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
           name:'',
            price:0,
            qty:0
        }
    }

    addItem=(name,price,qty)=>{
        this.setState({
            name:name,
            price:price,
            qty:qty
        })
    }

    render() {
        return (
            <div>
                <h2>My Cart</h2>
                <Item/>


            </div>
        );
    }
}

export default Cart;