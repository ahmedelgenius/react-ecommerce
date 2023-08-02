import baseURL from "../Api/BaseURL";

const useInsertData = async (url, params) => {
  const res = await baseURL.post(url, params);

  return res;
};
const useInsertDataWithImage = async (url, params) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGExOGRlNmVlYzNhYzNhZmNmNTkwZjAiLCJpYXQiOjE2OTAyMDU5NTgsImV4cCI6MTY5Nzk4MTk1OH0.ogjIpOpjrYELxhpobMUj-mmy3orCzQLFLTiQezFqiZM";
  const headersContainaer = { Authorization: `Bearer ${token}` };
  console.log(headersContainaer);
  const res = await baseURL.post(url, params, config, headersContainaer);
  console.log(res);
  return res;
};

export { useInsertData, useInsertDataWithImage };
