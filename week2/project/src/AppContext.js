import React,{useState, createContext} from 'react';

export const AppContext = createContext();
export const AppProvider = (props) => {

    const [items, setItems] = useState([
       
        
    ]);

    const [comments,setComments] = useState([]);

    return (
        <AppContext.Provider value={{value:[items,setItems],value2:[comments,setComments]}}>
            {props.children}
        </AppContext.Provider>
    );

}
