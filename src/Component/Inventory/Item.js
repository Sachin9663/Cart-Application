import React,{Component} from 'react';
import './item.css';

class Item extends Component{
    constructor(props) {
        super(props);
        this.state={
            stock:this.props.quantity,
            text:'In stock',
            mute:false

        }
        console.log(this.state.stock);
    }
    handleClick=(id)=>{
        if(this.state.stock>1){
            this.setState({
                stock:this.state.stock-1
            })
            console.log(this.state.stock);
        }
        else{
            this.setState({
                stock:0,
                mute:true,
                text:'Sold Out'
            })
            }


        }
    render() {
        let {name,quantity,image,price}=this.props

        return (
            <div className='item-card'>
                <div className='card-img'>
                    <img src={image}/>
                </div>
                <div className='card-details'>
                    <h3>{name}</h3>
                    <p className='price'>${price}</p>
                    <p className='stock'>{this.state.text}({this.state.stock})</p>
                    <button className='add-button'
                            onClick={this.handleClick}
                            disabled={this.state.mute}
                    >Add to Cart</button>
                </div>

            </div>
        )
    }
}

export default Item;