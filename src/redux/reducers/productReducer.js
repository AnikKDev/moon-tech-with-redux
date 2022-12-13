const initialState = {
  test: "HELLO",
};

// redux e ei function e je state param ta ase, sheta by default useReducer er moto initial state ke pabena
const productReducer = (state = initialState, action) => {
  return state;
};
export default productReducer;
