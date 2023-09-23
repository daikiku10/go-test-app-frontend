import Axios, { InternalAxiosRequestConfig, AxiosHeaders, AxiosResponse } from "axios";
import { API_URL } from "@/config/config";
import { error } from "console";


/**
 * 各リクエストごとにヘッダーを設定するための関数
 * 
 * @param config
 * @return 設定したヘッダー
 */
function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  console.log('axios-config', config);
  // アクセストークンの設定
  const token = 'testToken';

  if (token) {
    config.headers.Authorization = token;
  }

  config.headers.Accept = "application/json";
  // config.headers["Content-Type"] = "multipart/form-data";
  // config.headers["Content-Type"] = "application/json";
  return config;
}


/** ラッピングされたaxios関数 */
export const axios = Axios.create({
  baseURL: API_URL, // ベースURLの設定
  timeout: 5000, // タイムアウトの設定
});

// 以下が任意の共通設定
// リクエスト時の共通設定
axios.interceptors.request.use(authRequestInterceptor);
// レスポンス時の共通設定
axios.interceptors.response.use(
  // 2xx の範囲内にあるステータスコードはこの関数が実行される
  (response: AxiosResponse<SuccessResponse<unknown>>) => {
    console.log('res', response)
    return response;
  },
  // 2xx の範囲外のステータスコードはこの関数が実行される
  (error: ErrorResponse) => {
    console.log('err', error)
    return Promise.reject(error)
  }
)

/** 成功レスポンス */
export type SuccessResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};

/** 失敗レスポンス */
export type ErrorResponse = {
  statusCode: number;
  title: string;
  message: string;
}
