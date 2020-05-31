import Type from "./types";

export const fetchStart = () => ({
  type: Type.FETCH_START
});

export const fetchError = error => ({
  type: Type.FETCH_ERROR,
  payload: { error }
});

export const getProductsSuccess = value => ({
  type: Type.GET_PRODUCTS_SUCCESS,
  payload: { value }
});

// export const postProductSuccess = obj => ({
//   type: Type.POST_PRODUCT_SUCCESS,
//   payload: { obj }
// });

// export const updateProductSuccess = (obj, id) => ({
//   type: Type.UPDATE_PRODUCT_SUCCESS,
//   payload: { id, obj }
// });

// export const deleteProductSuccess = id => ({
//   type: Type.COSTS_DELETE_SUCCESS,
//   payload: { id }
// });
