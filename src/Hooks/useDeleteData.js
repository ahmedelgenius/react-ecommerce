import baseURL from "../Api/BaseURL";

const useDeleteData = async (url, params) => {
  const res = await baseURL.delete(url);
  return res;
};

export default useDeleteData;
