/*
 * Description  : 模板数据type
 * Author       : Saraku.
 * Date         : 2021-04-13 22:23:09
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-13 22:37:18
 */
import {
  ReactNode,
  ReactElement,
  ComponentClass,
  CElement,
  Component,
} from 'react';

/** 定义组件的一个JSON格式定义 */
export interface NodeConfigType {
  type:string,
  props?:any,
  children?:NodeConfigType[] | null | undefined;
}
