/*
 * Description  : 通用方法
 * Author       : Saraku.
 * Date         : 2021-04-20 22:41:36
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-24 22:07:20
 */

/** 精确类型判断，代替typeof 开头字母为小写 */
export const typeofObj = (value: any) => {
  let res = Object.prototype.toString.call(value).split(' ')[1];
  return res[0].toLowerCase() + res.slice(1,res.length-1);
};
