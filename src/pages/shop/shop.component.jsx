import React from 'react' ;

import SHOP_DATA from './shop.data.js' ;
import CollectionPreview from '../../components/collection-preview/collection-preview.component'


class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            collection : SHOP_DATA 
        }
    }

    render(){
        const {collection} = this.state ;
        return(
                <div className='shop-page'> 
                   {
                       collection.map(({id , ...otherCollectionProps}) => (
                           <CollectionPreview key={id} {...otherCollectionProps} />
                       ))
                   } 
                </div>
        );
    }
}

export default ShopPage ;

//...otherCollection is other part of the state for passing to the component