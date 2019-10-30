import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collectionItem';

import { selectCollection } from '../../redux/shop/shopSelectors';

import './styled.scss';

const CollectionPage = ({ collection }) => {

  return (
    <div className='collection-page'>
      <h2>Collection Page</h2>
    </div>
  )
}

const MapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(MapStateToProps)(CollectionPage);