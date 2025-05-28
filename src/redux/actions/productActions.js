import axios from 'axios';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = (id, limit, sort, categories, specificCat) => async (dispatch) => {
   dispatch({ type: FETCH_PRODUCTS_REQUEST });
   var params = '';
   if (id) {
      params = id;
   } else if (limit) {
      params = `limit=${limit}`;
   } else if (sort) {
      params = `sort=${sort}`;
   } else if (categories) {
      params = categories;
   } else if (categories && specificCat) {
      params = `${categories}/${specificCat}`;
   }
   try {
      const response = await axios.get(`https://fakestoreapi.com/products/${params}`);
      dispatch({
         type: FETCH_PRODUCTS_SUCCESS,
         payload: response.data
      });
   } catch (error) {
      dispatch({
         type: FETCH_PRODUCTS_FAILURE,
         payload: error.message
      });
   }
};
