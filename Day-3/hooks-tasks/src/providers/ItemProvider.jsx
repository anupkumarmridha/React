import {createContext, useReducer, useEffect} from 'react';
import { initialState, itemReducer } from '../reducers/itemReducer';

const ItemContext = createContext();

export const ItemProvider = ({children}) => {
    const [state, dispatch] = useReducer(itemReducer, initialState);
    useEffect(()=>{
        console.log("Items list updated: ", state.items);
    },[state.items]);

    return (
        <ItemContext.Provider value={{ items:state.items, dispatch}}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;

