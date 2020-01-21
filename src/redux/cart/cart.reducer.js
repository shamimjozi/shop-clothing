import CartActionTypes from './cart.types';
import {addItemsToCart} from './cart.utils';

const INITIAL_STATE ={
    hidden :true,
    cartItems : []
};

const cartReducer = (state=INITIAL_STATE , action) =>{
    switch(action.type)  {
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM :
            return{
                ...state,
                cartItems:addItemsToCart(state.cartItems, action.payload)
            }
        
         default :
            return state;
    }
}
//cartItems :
///the first one is because of the exist cart item + the new items -> go to utils function to check the exitingItem in cartitems to update the quantity for the items

export default cartReducer;