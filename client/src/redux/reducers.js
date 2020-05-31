import Type from "./types";

export const products = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_PRODUCTS_SUCCESS:
      return payload;
    // case Type.POST_PRODUCT_SUCCESS:
    //   return [...state, payload.obj];
    // case Type.UPDATE_PRODUCT_SUCCESS:
    //   return [...state, payload.obj];
    // case Type.DELETE_PRODUCT_SUCCESS:
    //   return state.filter(elem => payload.id !== elem.id);
    default:
      return state;
  }
};
