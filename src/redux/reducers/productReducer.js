import {
   FETCH_PRODUCTS_REQUEST,
   FETCH_PRODUCTS_SUCCESS,
   FETCH_PRODUCTS_FAILURE,
   FETCH_PRODUCT_REQUEST,
   FETCH_PRODUCT_SUCCESS,
   FETCH_PRODUCT_FAILURE
} from '../actions/productActions';

const initialState = {
   loading: false,
   products: [],
   error: ''
};

const productByIDInitialState = {
   loadingp: false,
   product: {},
   errorp: ''
};

export const productReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
         return { ...state, loading: true };
      case FETCH_PRODUCTS_SUCCESS:
         return { loading: false, products: action.payload, error: '' };
      case FETCH_PRODUCTS_FAILURE:
         return { loading: false, products: [], error: action.payload };
      default:
         return state;
   }
};

export const productByIdReducer = (state = productByIDInitialState, action) => {
   switch (action.type) {
      case FETCH_PRODUCT_REQUEST:
         return { ...state, loadingp: true };
      case FETCH_PRODUCT_SUCCESS:
         return { loadingp: false, product: action.payload, errorp: '' };
      case FETCH_PRODUCT_FAILURE:
         return { loadingp: false, product: {}, errorp: action.payload };
      default:
         return state;
   }
};
