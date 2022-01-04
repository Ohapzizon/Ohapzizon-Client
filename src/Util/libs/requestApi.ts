import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, BASE_HEADER } from "../../Constants/Config.json";
import Storage from "../Storage";

const RequestApi = async (p: AxiosRequestConfig) => {
  try {
    const header = Object.assign({
      ...p.headers,
      ...BASE_HEADER,
      ...{
        Authorization: Storage.get("accessToken") ?? "",
      },
    });
    return axios({
      method: p.method,
      baseURL: BASE_URL,
      url: p.url,
      data: p.data,
      headers: header,
    });
  } catch (e) {
    throw e;
  }
};

export default RequestApi;
