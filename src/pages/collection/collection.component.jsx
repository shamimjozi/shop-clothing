import React from 'react';
import { connect } from 'react-redux';

import CollectionItems from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

 
const CollectionPage = ({ match, collections }) =>{ 
    var index;

    const collection = collections.find(
        collect=> collect.routeName === match.params.collectionId );

    if(collection){

        for(var i=0; i<collections.length; i++){
            if(collections[i].routeName===match.params.collectionId){
                index = i;
            }
        }
        const {title, items} = collections[index];

        return(
            
                <div className='collection-page'>
                    <h2 className='title'>{title}</h2>
                    <div className='items'>
                        {items.map(item => (
                            <CollectionItems key={item.id} item={item} />
                        ))}
                    </div>
                </div>
        );
    }

        return(
                <div className='collection-page'>
                   <h2>Can not find !!!</h2> 
                </div>
        );

}

const mapSatteToProps = ({shop : {collections}}) => ({
    collections
}) 


export default connect(mapSatteToProps)(CollectionPage);