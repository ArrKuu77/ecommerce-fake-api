const reducer = (state, action) => {
  switch (action.type) {
    case "Get_Products":
      return { ...state, products: action.payload };
    case "Remove_Cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "Add_To_Cart":
      return { ...state, cart: [...state.cart, action.payload] };
    case "Clear_Cart":
      return { ...state, cart: [] };
    case "Nav_Search_Disable":
      return { ...state, navSearch: true };
    case "Nav_Search_Nodisable":
      return { ...state, navSearch: false };
    default:
      return state;
  }
};

export default reducer;
