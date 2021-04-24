import React from 'react';
import styles from './index.less';
import DragItem from '../components/DragItem'
import {Test} from '../../plugin'

export default function ComponentContainer(props: any) {
  return <div className={styles.leftPane}>
    <DragItem>{Test}</DragItem>
  </div>;
}
