import React from 'react' ;
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


const ShopPage = ({match}) =>(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
    );


export default ShopPage ;

//...otherCollection is other part of the state for passing to the component

// match : in App we access the collections and shop ->match.path : /shop but in that way is more flexible
// match -> {path: "/shop", url: "/shop", isExact: false, params: {…}}