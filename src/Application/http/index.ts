import { HttpResponse } from "@/Domain/login/http/HttpResponse";
import { post, get, put, deleteResource } from "./axios";
import { GetRequestConfig } from "@/Domain/common/GetRequestConfig";
import { PutConfig } from "@/Domain/common/PutConfig";

const httpPost = async <T>(
  url: string,
  data: Object,
  options?: Object
): Promise<HttpResponse<T>> => {
  return await post(url, data, options);
};

const httpGet = async <T>({
  url,
  params,
  objectParams,
  options = {},
}: GetRequestConfig): Promise<HttpResponse<T>> => {
  return await get({ url, params, objectParams, options });
};

const httpPut = async <T>({ url, data, options = {} }: PutConfig): Promise<HttpResponse<T>> => {
  return await put({ url, data, options });
};

const httpDelete = async <T>({
  id,
  url,
  options = {},
}: {
  url: string;
  id: string;
  options?: Object;
}): Promise<HttpResponse<T>> => {
  return await deleteResource({ id, url, options });
};

export { httpPost, httpGet, httpPut, httpDelete };
