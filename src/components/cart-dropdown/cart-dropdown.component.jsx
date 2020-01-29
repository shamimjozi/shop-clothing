import React from 'react' ;
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component' ;
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items' >
           {
               //if the length is 0 the value will be false, otherwise is true
               // 0, false, undefined, null, NAN, "" -> means false in if condition
               cartItems.length ? (  
                    cartItems.map(cartItem =>(
                            <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ):(
                <span className='empty-message'>Your cart is empty!</span>
                )
                }
        </div>
        <CustomButton onClick={() =>{ 
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>
                GO TO CHECKOUT
        </CustomButton>

    </div>
)

const mapSateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default  withRouter(connect(mapSateToProps)(CartDropdown)) ;

//withRouter get the component from connect as its argument 
// We don't need to write another dispatch to access the state of toggleHidden, the dispatch is func is availble here so just we call  it .