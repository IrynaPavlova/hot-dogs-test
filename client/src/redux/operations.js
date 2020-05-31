import {
  fetchStart,
  fetchError,
  getProductsSuccess
  //   postProductSuccess,
  //   updateProductSuccess,
  //   deleteProductSuccess
} from "./actions";

import services from "../services/services";
export const getProducts = () => async (dispatch, getState) => {
  dispatch(fetchStart());
  try {
    const response = await services.getAllProducts(getState());
    dispatch(getProductsSuccess(response.data.products));
  } catch (error) {
    dispatch(fetchError(error.message));
    console.log("error", error);
    //throw new Error(error);
  }
};

// export const postProduct = obj => async dispatch => {
//   dispatch(fetchStart());
//   try {
//     const response = await services.createProduct(obj);
//     dispatch(postProductSuccess(obj));
//   } catch (error) {
//     dispatch(fetchError(error.message));
//     console.log("error", error);
//     throw new Error(error);
//   }
// };

///////UpdateProduct

// export const deleteProduct = id => async dispatch => {
//   dispatch(fetchStart());
//   try {
//     const response = await services.deleteProduct(id);
//     await dispatch(deleteProductSuccess(id));
//   } catch (error) {
//     dispatch(fetchError(error.message));
//     console.log(error);
//     throw new Error(error);
//   }
// };
