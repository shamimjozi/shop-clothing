import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

//use redux for hide and show the drop down cart :)

const mapDispatchToProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

//0 is the initial value;
//It will accumalate all the value of quantity of all the cartItem
//if we have 1,2 as quantities : Then 0+1=1 -> 1+2=3 ... 
//This type of coding that use a part of the cartItem to caculate new thing call SELECTOR
//The point is that this fun is execute all the times even you change the user not the items and it's not good for performancing so => 
//we should check -> if the cartItems didn' change , this is not necessary to execute this func we use memoization
//so we shoul add "yarn add reselect" packet to reselect
const mapStateToProps = ({ cart: {cartItems} }) => ({
    itemCount: cartItems.reduce((accumalatedQuantity,cartItem) => 
    accumalatedQuantity + cartItem.quantity ,0)
});


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) ;