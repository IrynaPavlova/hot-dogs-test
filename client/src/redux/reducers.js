import Type from "./types";

export const products = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_PRODUCTS_SUCCESS:
      return payload;
    case Type.POST_PRODUCT_SUCCESS:
      return state;
    case Type.UPDATE_PRODUCT_SUCCESS:
      return state;
    case Type.DELETE_PRODUCT_SUCCESS:
      return state;
    default:
      return state;
  }
};
