import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./Reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [ProductLists, setProductLists] = useState([]);

  const initialstate = {
    products: [],
    cart: [],
    categoryGroup: [],
    navSearch: false,
  };

  const FatchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProductLists(data);
  };
  const [search, setsearch] = useState("");

  useEffect(() => {
    FatchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "Get_Products", payload: ProductLists });
    const filterProducts = ProductLists.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    dispatch({ type: "Get_Products", payload: filterProducts });
  }, [ProductLists, search]);

  const [state, dispatch] = useReducer(reducer, initialstate);

  const data = { state, dispatch, search, setsearch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useCustomHook = () => useContext(StateContext);
