import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const isServer = typeof window === "undefined";

interface BreadcrumbsApiConfig {
  token?: string;
  version?: "1.0" | "1.1";
}
const clientRedirectToLogin = () => {
  localStorage.clear();
  // deleteCookie("token");
  location.href = "/";
};

export const getStoredId = () => {
  return !isServer ? localStorage.getItem("userId") : "unknown";
};

const API = axios.create({
  baseURL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 5000,
  headers: {
    accept: "application/json"
  }
});

const requestHandler = (config) => {
  const { url } = config;
  let token = "";
  // We should use only client side request, but we like defensive code !
  if (!isServer) {
    token = localStorage.getItem("token");
    if (token && url !== "/login") {
      config.headers["Authorization"] = "Bearer " + token;

      try {
        const { exp }: { exp: number } = jwtDecode(token);
        if (Date.now() > exp * 1000) {
          clientRedirectToLogin();
          const CancelToken = axios.CancelToken;
          return {
            ...config,
            cancelToken: new CancelToken((cancel) => cancel("token expired"))
          };
        }
      } catch (e) {
        clientRedirectToLogin();
      }
    }
  }

  if (config.method.toLowerCase() !== "get")
    config.headers["Content-Type"] = "application/json";
  return config;
};

const responseHandler = (response) => {
  if ((response?.status === 401 || response.status === 403) && !isServer) {
    return Promise.reject(response);
  }

  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

API.interceptors.request.use(
  (config: AxiosRequestConfig) => requestHandler(config),
  (error: AxiosError) => errorHandler(error)
);

API.interceptors.response.use(
  (response: AxiosResponse) => responseHandler(response),
  async (error: AxiosError) => errorHandler(error)
);

const processBreadcrumbsApiconfig = (bcConfig?: BreadcrumbsApiConfig): void => {
  if (bcConfig?.token)
    API.defaults.headers.common["Authorization"] = `Bearer ${bcConfig.token}`;
  if (bcConfig?.version)
    API.defaults.headers.common["X-API-Version"] = bcConfig.version;
};

export const httpServices = async <T = any, D = Record<string, unknown>>(
  url: string,
  method = "GET",
  params?: D,
  bcConfig?: BreadcrumbsApiConfig,
  axiosConfig?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  processBreadcrumbsApiconfig(bcConfig);

  switch (method) {
    case "GET":
      return await API.get(url, axiosConfig);
    case "POST":
      return await API.post(url, params, axiosConfig);
    case "PUT":
      return await API.put(url, params, axiosConfig);
    case "PATCH":
      return await API.patch(url, params, axiosConfig);
    case "DELETE":
      return await API.delete(url, axiosConfig);
    default:
      return await API.get(url, axiosConfig);
  }
};
