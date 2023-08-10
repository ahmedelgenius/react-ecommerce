import { useGetDataWithToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { GET_ALL_ORDERS, GET_ONE_ORDER } from "../type";

export const getAllOrders = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetDataWithToken(
      `/api/v1/orders?limit=${limit}&page=${page}`
    );

    dispatch({
      type: GET_ALL_ORDERS,
      payload: response.data,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDERS,
      payload: e.response,
    });
  }
};
export const getOneOrder = (id) => async (dispatch) => {
  try {
    const response = await useGetDataWithToken(`/api/v1/orders/${id}`);

    dispatch({
      type: GET_ONE_ORDER,
      payload: response.data,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ORDER,
      payload: e.response,
    });
  }
};
