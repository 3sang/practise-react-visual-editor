import React from 'react';
import { Row, Col } from 'antd';
import DesignBlock from './components/DesignBlock';
import styles from './index.less';

export default function DesignPanel(props: any) {
  return (
    <div className={styles.centerPane}>
      <Row className={styles.designRow}>
        <Col span={12} className={styles.designCol}>
          <DesignBlock />
        </Col>
        <Col span={12} className={styles.designCol}>
          <DesignBlock />
        </Col>
      </Row>
      <Row className={styles.designRow}>
        <Col span={12} className={styles.designCol}>
          <DesignBlock />
        </Col>
        <Col span={12} className={styles.designCol}>
          <DesignBlock />
        </Col>
      </Row>
    </div>
  );
}
