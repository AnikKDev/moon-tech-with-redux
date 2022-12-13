import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  //   test: "HELLO",
  cart: [],
};

// redux e ei function e je state param ta ase, sheta by default useReducer er moto initial state ke pabena
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
      return {};
    }
    default:
      return state;
  }
};
export default productReducer;
