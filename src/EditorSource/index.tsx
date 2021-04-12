import React from 'react';
import SettingForm from './view-index/SettingForm';
import DesignPanel from './view-index/DesignPanel';
import ComponentContainer from './view-index/PluginContainer';
import styles from './index.less';

export default function Index(props: any) {
  return (
    <div className={styles.default}>
      <SettingForm />
      <DesignPanel />
      <ComponentContainer />
    </div>
  );
}
