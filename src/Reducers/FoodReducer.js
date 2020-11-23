import { GET_ALL_PRODUCT, ADD_PRODUCT } from "../Action/types";

const initialState = {
  produits: [],
};

export default function foodReducer(state = initialState, action) {
  if (action.type === GET_ALL_PRODUCT) {
    return {
      ...state,
      produits: action.payload,
    };
  }
  if (action.type === ADD_PRODUCT)
    return {
      ...state,
      produits: { ...action.payload, ...state.produits.produits },
    };
  return state;
}
