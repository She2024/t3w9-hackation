import { useContext, createContext, useState } from "react";

const StoreContext = createContext(null);

export const StoreProvider = ( )=> {
    const [isStoreUpdated, setIsStoreUpdated] =useState(true);
    const [store, setStored] =useState();
    const [searchState, setSearchState] =useState();

        <StoreContext.Provider value = {{ store, setStore, searchState, setSearchState, isStoreUpdated, setIsStoreUpdated }}>
            {children}
        </StoreContext.Provider>

}

export const useStore = () => useContext(StoreContext);