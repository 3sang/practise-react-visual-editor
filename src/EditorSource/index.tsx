import React from 'react';
import SettingForm from './view-index/SettingForm';
import DesignPanel from './view-index/DesignPanel';
import ComponentContainer from './view-index/ComponentContainer';
// import styles from './';

export default function Index(props: any) {
  return (
    <div>
      <SettingForm />
      <DesignPanel />
      <ComponentContainer />
    </div>
  );
}
