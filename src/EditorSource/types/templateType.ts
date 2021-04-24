/*
 * Description  : 模板数据type
 * Author       : Saraku.
 * Date         : 2021-04-13 22:23:09
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-24 22:02:18
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
  children:PluginConfigType,
  [propName: string]: any
};

/** 定义组件的JS对象 */
export interface NodeConfigType {
    type:string,
    props?:any,
    childrenNodes?:NodeConfigType[] | null | undefined;
}

/** plugin定义的对象 */
export interface PluginConfigType {
  [propName:string]:{
    type:string,
    props?:any,
    childrenNodes?:String[] | String | null | undefined;
  }
}
