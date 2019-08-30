const toString = Object.prototype.toString

// 类型谓词
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// // 类型谓词
// export function isObject(val: any): val is Object{
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }

  return to as T & U
}
