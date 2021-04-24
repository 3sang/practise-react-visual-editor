/*
 * Description  : 关于插件的相关方法
 * Author       : Saraku.
 * Date         : 2021-04-20 22:16:23
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-24 22:07:38
 */

import React, { createElement, Fragment } from 'react';
import { message } from 'antd';
import { isEmpty } from 'lodash';
import { PluginConfigType } from '../types/templateType';
import { typeofObj } from './commonUtils';

/** 用于解析 PluginConfigType 这种类型的JS对象转换成ReactNode */
export const createNodes = (pluginObj: PluginConfigType) => {
  if (typeofObj(pluginObj) !== 'object') {
    return console.error('向组件内注入的plugin数据是非对象类型，请检查');
  }

  // 非空处理
  const keys = Object.keys(pluginObj);
  if (isEmpty(keys)) return createElement(Fragment);

  // 终于开始了。根节点处理
  const root = pluginObj[keys[0]];
  const rootType = root.type;
  const rootProps = root.props;
  // 处理children,从根节点索引。

  const rootChildNodes = createChildrenNodes(root.childrenNodes, pluginObj);

  return createElement(rootType, rootProps, rootChildNodes);
};

/** 用于处理每一个父节点和它的子节点 */
export const createChildrenNodes = (childrenNodes = [], pluginObj: PluginConfigType) => {
  let result = [];
  if (isEmpty(childrenNodes)) return result;

  // console.log(childrenNodes)

  childrenNodes.map((key: string) => {
    const value = pluginObj[key];
    isEmpty(value) && console.error(`${key}组件没有在注入的pluginConfig中，请检查`);

    if (isEmpty(value.childrenNodes)) {
      result = [createElement(value.type, value.props)];
    } else {
      result = [
        createElement(
          value.type,
          value.props,
          ...createChildrenNodes(value.childrenNodes, pluginObj),
        ),
        ...result,
      ];
    }
  });

  return result;
};
