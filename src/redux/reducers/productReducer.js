import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  //   test: "HELLO",
  cart: [],
};

// redux e ei function e je state param ta ase, sheta by default useReducer er moto initial state ke pabena
const productReducer = (state = initialState, action) => {
  // console.log(state);
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );

  switch (action.type) {
    case ADD_TO_CART: {
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity + 1;
        return { ...state, cart: [...newCart, selectedProduct] };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case REMOVE_FROM_CART: {
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;
        return { ...state, cart: [...newCart, selectedProduct] };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (prodcut) => prodcut._id !== action.payload._id
        ),
      };
    }
    default:
      return state;
  }
};
export default productReducer;
