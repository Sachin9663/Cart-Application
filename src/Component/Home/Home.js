import React,{Component} from "react";
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        let itemList = this.props.items.map(item => {
                return (
                    <div className='item-card'>
                        <div className='card-img'>
                            <img src={item.image}/>
                        </div>
                        <div className='card-details'>
                            <h3>{item.name}</h3>
                            <p className='price'>${item.price}</p>
                            <p className='stock'>In stock({item.quantity})</p>
                            <button className='add-button'>Add to Cart</button>
                        </div>
                    </div>
                )

            })
        return(
            <div>
                <itemList/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
};

export default connect(mapStateToProps)(Home)