import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_PAGE,
  GET_ERROR,
  GET_PRODUCT,
  GET_RELATED_PRODUCTS,
  UPDATE_PRODUCT,
} from "../type";

const initial = {
  product: [],
  allProducts: [],
  oneProduct: [],
  relatedProducts: [],
  deleteProduct: [],
  updateProduct: [],
  loading: true,
};

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        product: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      };
    case GET_RELATED_PRODUCTS:
      return {
        ...state,
        relatedProducts: action.payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
