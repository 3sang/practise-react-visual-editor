/*
 * Description  : 拖拽节点包裹，上面附有拖拽事件，使用于pluginContainer
 * Author       : Saraku.
 * Date         : 2021-04-12 22:05:22
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-19 00:10:16
 */

import React, { useState, useEffect, DragEvent, createElement, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dragItemType,NodeConfigType } from '@/EditorSource/types/templateType';
import styles from './index.less'

/** 将组件注册到公共（plugin中暴露）的组件包裹起来，主要使用children。
 * 可以包裹JSON或者组件
 */
function DragItem(props: dragItemType) {
  const { children } = props;
  const { type = '', props: nodePorps = {}, childrenNodes = [] } = (children as NodeConfigType);
  const [element, setElement] = useState<ReactNode>();
  const dispatch = useDispatch();

  useEffect(() => {
    // 递归处理childrenNodes,将标准化为createElement可接收，createElemnt无法递归处理，都是一个个渲染出来的。
    setElement(type ? createElement(type, nodePorps) : children);
  }, [nodePorps]);

  /**
   * 开始拖动了，向store内存入selectd数据
   * @param e 鼠标事件
   */
  const onDragStart = (e: DragEvent) => {
    dispatch({
      type: 'editCore/setSelected',
      payload: props,
    });
  };

  return (
    <div className={styles.dragItem} draggable onDragStart={onDragStart} {...props}>
      {element}
    </div>
  );
}

export default DragItem;
