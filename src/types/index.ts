// 字符串字面量
export type Method = 'get' | 'Get'
| 'delete' | 'DELETE'
| 'post' | 'POST'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'put' | 'PUT'
| 'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any,
  headers?: any
}
