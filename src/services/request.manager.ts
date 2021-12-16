import Axios, { AxiosRequestConfig } from "axios";

const request = async (config: AxiosRequestConfig) => {
    config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...config.headers,
    };
    return Axios(config);
};

const RequestManager =  {
    get: async (url: string, config?: AxiosRequestConfig) =>
        request({
            method: "get",
            url,
            ...config,
        }),

    put: async (
        url: string,
        data: AxiosRequestConfig["data"],
        config?: AxiosRequestConfig
    ) =>
        request({
            method: "put",
            url,
            data,
            ...config,
        }),

    post: async (
        url: string,
        data: AxiosRequestConfig["data"],
        config?: AxiosRequestConfig
    ) =>
        request({
            method: "post",
            url,
            data,
            ...config,
        }),

    patch: async (
        url: string,
        data: AxiosRequestConfig["data"],
        config?: AxiosRequestConfig
    ) =>
        request({
            method: "patch",
            url,
            data,
            ...config,
        }),
 
    delete: async (url: string, config?: AxiosRequestConfig) =>
        request({
            method: "delete",
            url,
            ...config,
        }),
};

export default RequestManager;