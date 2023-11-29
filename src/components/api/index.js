import axios from "axios";

const api = () => {
  const instanceAxios = axios.create({
    baseURL: "http://moviesapi.ir/api/v1",
  });
  instanceAxios.interceptors.response.use((response) => response.data.data[0]);
  return instanceAxios;
};

export default api();
