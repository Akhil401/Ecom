import axios from 'axios';
import { API_BASE_URL } from '../../utils/constants';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = (url, params) => async (dispatch) => {
   dispatch({ type: FETCH_PRODUCTS_REQUEST });

   try {
      const response = await axios.get(`${url ? url : API_BASE_URL}${params || ''}`);
      dispatch({
         type: FETCH_PRODUCTS_SUCCESS,
         payload: response.data.products
      });
   } catch (error) {
      dispatch({
         type: FETCH_PRODUCTS_FAILURE,
         payload: error.message
      });
   }
};

export const fetchProductById = (productId) => async (dispatch) => {
   dispatch({ type: FETCH_PRODUCT_REQUEST });

   try {
      const response = await axios.get(`${API_BASE_URL}/${productId}`);
      dispatch({
         type: FETCH_PRODUCT_SUCCESS,
         payload: response.data
      });
   } catch (error) {
      dispatch({
         type: FETCH_PRODUCT_FAILURE,
         payload: error.message
      });
   }
};
