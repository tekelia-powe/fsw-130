import React, {useContext} from 'react';
import Item from './Item'
import {AppContext} from './AppContext'


const ItemList = () => {
  const {value} = useContext(AppContext);
  const [items, setItems] = value;
  
    
  return (
    <div>
      
       {items.map(item => (
           <Item key={item.id} id={item.id} title={item.title} description={item.description} imgURL={item.imgURL} />
          
       ))}
        
    </div>
  );
};

export default ItemList;
