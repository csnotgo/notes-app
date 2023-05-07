import axios from "axios";

const API_KEY = "bXwvBdTK9dW4_dSHyFuSoj";
axios.defaults.baseURL = `https://quintadb.com.ua/apps/avWPNdL8nhWORcLSktztCi/dtypes/entity/dcJI4OW7TdW6tdJx0cwenX.json?rest_api_key=${API_KEY}&amp;view=`;

export const fetchAll = async () => {
  try {
    return await axios.get(``);
  } catch (error) {
    console.log(error);
  }
};
