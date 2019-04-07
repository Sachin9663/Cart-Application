import React,{Component} from 'react';
import Item from './Item';
import data from './Store';
import './store.css';

class Store extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        let arr=data['list'];
        return (
            <div className='store'>
                {
                    arr.map(item=>{
                        return(
                            <div className='store-card'>
                               <Item
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}

                               />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Store;