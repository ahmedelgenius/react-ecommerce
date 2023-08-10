import { CREATE_ORDER_CASH } from "../type";

const initial = {
  orderCash: [],

};

const checkoutReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_ORDER_CASH:
      return {
        ...state,
        orderCash: action.payload,
    
      };
  
    default:
      return state;
  }
};

export default checkoutReducer;
