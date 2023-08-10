import { GET_ALL_ORDERS, GET_ONE_ORDER } from "../type";

const initial = {
  allOrders: [],
  oneOrder: [],
};

const orderReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
    case GET_ONE_ORDER:
      return {
        ...state,
        oneOrder: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
