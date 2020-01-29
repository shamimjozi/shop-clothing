import CartActionTypes from './cart.types';
import {addItemsToCart, removeItemFromCart} from './cart.utils';

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
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }    
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem =>cartItem.id !== action.payload.id
                    )
            }
        //filter will back the true conditions if they are not match so true and will bring back
         default :
            return state;
    }
}
//cartItems :
///the first one is because of the exist cart item + the new items -> go to utils function to check the exitingItem in cartitems to update the quantity for the items

export default cartReducer;