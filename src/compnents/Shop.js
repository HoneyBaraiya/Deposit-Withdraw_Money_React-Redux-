import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { action_creator } from '../state/index';


const Shop=()=>{
    const dispatch=useDispatch();
    const {dipositeMoney,withdrawMoney}=bindActionCreators(action_creator,dispatch)


    return(
        <div className='container'>
            <h1>Transaction:</h1><br/>
            <button className='btnAdd mx-2' onClick={()=>{dipositeMoney(50)}}>+</button>
            Add to cart
            <button className='btnMinus mx-2' onClick={()=>{withdrawMoney(50)}}>-</button>
        </div>
    )
}
export default Shop;