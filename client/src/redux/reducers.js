import Type from "./types";

export const products = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_PRODUCTS_SUCCESS:
      return payload.value;
    case Type.POST_PRODUCT_SUCCESS:
      return [...state, payload.obj];
    case Type.UPDATE_PRODUCT_SUCCESS:
      return [...state.filter(el => payload.id !== el.id), payload.obj];
    case Type.DELETE_PRODUCT_SUCCESS:
      return state.filter(el => payload.id !== el.id);
    default:
      return state;
  }
};
