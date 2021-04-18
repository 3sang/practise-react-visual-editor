/*
 * Description  : 模板数据type
 * Author       : Saraku.
 * Date         : 2021-04-13 22:23:09
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-18 23:59:14
 */
import {
  ReactNode,
  Props,
  ComponentClass,
  CElement,
  Component,
} from 'react';

/** dragItem 接收参数定义 */
export type dragItemType = {
  children:NodeConfigType | ReactNode,
  [propName: string]: any
};

/** 定义组件的一个JSON格式定义 */
export interface NodeConfigType {
  type:string,
  props?:any,
  childrenNodes?:NodeConfigType[] | null | undefined | ReactNode;
}


