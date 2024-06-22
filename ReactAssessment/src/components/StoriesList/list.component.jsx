import React from 'react';
import Item from './item.component';


const Listcomponent=({ list })=> {   
  
  return (
    <>
     <ul>
       {list.map(item => (
       <Item key={item.objectID} item={item} />
    ))}
  </ul>
  </>

   
  )
}

export default Listcomponent




