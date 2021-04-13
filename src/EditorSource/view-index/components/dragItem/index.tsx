/*
 * Description  : 拖拽节点包裹，上面附有拖拽事件，使用于pluginContainer
 * Author       : Saraku.
 * Date         : 2021-04-12 22:05:22
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-13 22:55:35
 */

import React, { useState, useEffect, DragEvent, createElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NodeConfigType } from '@/EditorSource/types/templateType';

function DragItem(props: NodeConfigType) {
  const { type, props: nodePorps, children } = props;
  const [element, setElement] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setElement(createElement(type, nodePorps, children));
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
    <div draggable onDragStart={onDragStart}>
      {element}
    </div>
  );
}

export default DragItem;
