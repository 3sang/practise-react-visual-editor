import React from 'react';
import styles from './index.less';

export default function ComponentContainer(props: any) {
  return <div className={styles.leftPane}>
    <div className={styles.dragBox}>这是一个测试拖拽用的Box</div>
  </div>;
}
