import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) =>(
        <div className='collection-overview'>
                {
            collections.map(({id , ...otherCollectionsProps}) => (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            ))
            } 
        </div>
);

const mapStateToProps = ({shop : {collections}}) => ({
    collections,
})

export default connect(mapStateToProps)(CollectionsOverview);