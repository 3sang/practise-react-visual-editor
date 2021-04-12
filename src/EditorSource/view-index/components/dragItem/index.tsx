/*
 * Description  : 拖拽节点包裹，上面附有拖拽事件，使用于pluginContainer
 * Author       : Saraku.
 * Date         : 2021-04-12 22:05:22
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-13 00:06:07
 */

import React ,{useState} from 'react';

function DragItem(props:React.ReactElement){

  /**
   * 开始拖动了，向store内存入selectd数据
   * @param e 鼠标事件
   */
  const onDragStart = (e:MouseEvent)=>{
    
  }
  return <div draggable onDragStart={onDragStart}>{props.children}</div>
}

export default DragItem;
