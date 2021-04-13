/*
 * Description  : 编辑器的每一个可被放下的 “块”。
 * Author       : Saraku.
 * Date         : 2021-04-13 23:11:13
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-13 23:21:31
 */

import React from 'react';
import styles from './index.less';

export default function DesignBlock(props: any) {
  return <div className={styles.dropBlock}>可被放下的区域</div>;
}
