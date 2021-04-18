/*
 * Description  : 编辑器的每一个可被放下的 “块”。
 * Author       : Saraku.
 * Date         : 2021-04-13 23:11:13
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-19 00:17:17
 */

import React, { useState } from 'react';
import classnames from 'classnames';
import { connect } from 'dva';
import styles from './index.less';

function DesignBlock(props: any) {
  const { currentSelect = {}, currentLayout = {} } = props;
  const [isOnDrop, setIsOnDrop] = useState<boolean>(false);

  const onDrop = (e: DragEvent) => {
    // 将selected中的JSON数据放进Layout的children中
    console.log(currentLayout, currentSelect);
    e.preventDefault();
  };

  // 避免出现禁止图标
  const onDragEnter = (e: DragEvent) => {
    setIsOnDrop(true);
    e.preventDefault();
  };

  const onDragLeave = (e: DragEvent) => {
    setIsOnDrop(false);
    e.preventDefault();
  };

  const onDragOver = (e:DragEvent)=>{
    e.preventDefault();
  };

  return (
    <div
      className={classnames(styles.dropBlock, isOnDrop && styles.onDrop)}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      可被放下的区域
    </div>
  );
}

export default connect(({ editCore }) => {
  return { currentSelect: editCore.currentSelect, currentLayout: editCore.currentLayout };
})(DesignBlock);
