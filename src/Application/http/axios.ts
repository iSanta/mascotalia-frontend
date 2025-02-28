import axios, { AxiosError, AxiosResponse } from "axios";
import { HttpResponse } from "@/Domain/login/http/HttpResponse";
import { GetRequestConfig } from "@/Domain/common/GetRequestConfig";
import { PutConfig } from "@/Domain/common/PutConfig";

const post = async <T>(url: string, data: Object, options?: Object): Promise<HttpResponse<T>> => {
  try {
    const res = await axios.post(url, data, options);
    if (res.status === 200) {
      return {
        message: "success",
        success: true,
        data: res.data,
      };
    }
  } catch (e) {
    return {
      message: (e as AxiosError<{ message: string }>).response?.data?.message as string,
      success: false,
      data: null as T,
    };
  }

  return {
    message: "Error",
    success: false,
    data: null as T,
  };
};

const get = async <T>({
  url,
  params,
  objectParams,
  options = {},
}: GetRequestConfig): Promise<HttpResponse<T>> => {
  try {
    let res: AxiosResponse<any, any>;

    if (objectParams) {
      res = await axios.get(url, { params: objectParams, ...options });
    } else {
      res = params ? await axios.get(`${url}?${params}`) : await axios.get(url, options);
    }

    if (res.status === 200) {
      return {
        message: "success",
        success: true,
        data: res.data,
      };
    }
  } catch (e) {
    return {
      message: (e as AxiosError).response?.data as string,
      success: false,
      data: null as T,
    };
  }

  return {
    message: "Error",
    success: false,
    data: null as T,
  };
};

const put = async <T>({ url, data, options }: PutConfig): Promise<HttpResponse<T>> => {
  try {
    const res = await axios.put(url, data, options);

    return {
      message: "success",
      success: true,
      data: res.data,
    };
  } catch (e) {
    return {
      message: (e as AxiosError<{ message: string }>).response?.data?.message as string,
      success: false,
      data: null as T,
    };
  }
};

const deleteResource = async <T>({
  id,
  url,
  options,
}: {
  url: string;
  id: string;
  options?: Object;
}): Promise<HttpResponse<T>> => {
  try {
    const res = await axios.delete(`${url}/${id}`, options);
    return {
      message: "success",
      success: true,
      data: res.data.value,
    };
  } catch (e) {
    return {
      message: (e as AxiosError<{ message: string }>).response?.data?.message as string,
      success: false,
      data: null as T,
    };
  }
};

export { post, get, put, deleteResource };
