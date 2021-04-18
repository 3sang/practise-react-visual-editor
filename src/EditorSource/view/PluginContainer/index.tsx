import React from 'react';
import styles from './index.less';
import DragItem from '../components/DragItem'
import {Test} from '../../plugin'

export default function ComponentContainer(props: any) {
  return <div className={styles.leftPane}>
    <DragItem >这是一个测试拖拽用的Box</DragItem>
    <DragItem>{Test}</DragItem>
  </div>;
}
