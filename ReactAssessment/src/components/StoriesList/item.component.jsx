import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
  <div>
    <span>
      <a href={item.url}><br></br>{item.title}</a>
    </span>
    <br />
    <span>{item.author}</span>
    <br></br>
    <span>{item.num_comments}</span>
    <br></br>
    <span>{item.points}</span>
    <br></br>
  </div>
);

export default Item;
