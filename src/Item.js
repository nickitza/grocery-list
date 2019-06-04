import React from 'react';

const Item = ({id, item, complete, itemClick}) => (
  <li id='color'
    style={ complete ? {...styles.grocery, ...styles.complete} : styles.grocery}
    onClick={() => itemClick(id)}
    >
      { item }
  </li>
);

const styles = {
  grocery: { cursor: 'pointer'},
  complete: { color: '#57606f', textDecoration: 'line-through'},
}

export default Item;