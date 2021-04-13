import React from 'react';
import {Row,Col} from 'antd'
import styles from './index.less';

export default function DesignPanel(props: any) {
  return <div className={styles.centerPane}>
    <Row className={styles.designRow}>
      <Col span={12} className={styles.designCol}>
        1
      </Col>
      <Col span={12} className={styles.designCol}>
        2
      </Col>
    </Row>
    <Row className={styles.designRow}>
      <Col span={12} className={styles.designCol}>
        3
      </Col>
      <Col span={12} className={styles.designCol}>
        4
      </Col>
    </Row>
  </div>;
}
