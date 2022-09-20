import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const intialValue = {
  products: [
    { id: "123", productName: "Milk", price: "50" },
    { id: "124", productName: "Butter", price: "70" },
    { id: "125", productName: "Eggs", price: "60" },
    { id: "126", productName: "water", price: "20" },
  ],
  cart: [],
};

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialValue);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData, DataContext };
