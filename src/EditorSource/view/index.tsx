import React from 'react';
import SettingForm from './SettingForm';
import DesignPanel from './DesignPanel';
import ComponentContainer from './PluginContainer';
import styles from './index.less';

export default function Index(props: any) {
  return (
    <div className={styles.default}>
      <ComponentContainer />
      <DesignPanel />
      <SettingForm />
    </div>
  );
}
