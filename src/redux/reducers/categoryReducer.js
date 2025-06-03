import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../actions/categoryActions';

const initialStateCategories = {
   loading: false,
   categories: [],
   error: ''
};

export const categoryReducer = (state = initialStateCategories, action) => {
   switch (action.type) {
      case FETCH_CATEGORIES_REQUEST:
         return { ...state, loading: true };
      case FETCH_CATEGORIES_SUCCESS:
         return { loading: false, categories: action.payload, error: '' };
      case FETCH_CATEGORIES_FAILURE:
         return { loading: false, categories: [], error: action.payload };
      default:
         return state;
   }
};
