import { DefaultOptions, QueryClient } from "@tanstack/react-query";
import { ErrorResponse } from "./axios";
import { AxiosError } from "axios";

const queryConfig: DefaultOptions<AxiosError<ErrorResponse>> = {
  queries: {
    // query 時のオプション設定
    suspense: true,
    retry: false,
    useErrorBoundary: true,
    
  },
  mutations: {
    // mutation 時のオプション設定
    useErrorBoundary: true,
  },
}

export const queryClient = new QueryClient({
  defaultOptions: queryConfig as DefaultOptions
})