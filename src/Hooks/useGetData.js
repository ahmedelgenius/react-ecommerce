import baseURL from "../Api/BaseURL";

const useGetData = async (url, params) => {
  const res = await baseURL.get(url);
  return res;
};

export default useGetData;
