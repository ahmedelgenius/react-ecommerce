import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_ORDER_CASH } from "../type";

export const createOrderCash = (id, data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/orders/${id}`, data);

    dispatch({
      type: CREATE_ORDER_CASH,
      payload: response.data,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: e.response,
    });
  }
};
