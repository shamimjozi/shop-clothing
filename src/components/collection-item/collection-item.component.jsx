import React from 'react' ;
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';
import './collection-item.styles.scss' ;

const CollectionItem = ({item, addItem }) => {
    const {name, price, imageUrl} = item ;
    return(
        <div className='collection-item' >
        <div
            className='image'
            style={{
                 backgroundImage : `url(${imageUrl})`
            }}
        />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={()=>addItem(item)} inverted> Add to cart </CustomButton>
    </div>
    )
}

    
const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

//this fumction recieve items as property and pass it to add item in action creator and get back the object with type of 
//add-item and payload will be item so new object will store 

export default connect(null, mapDispatchToProps )(CollectionItem) ;