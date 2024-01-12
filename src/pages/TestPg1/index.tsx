import React from 'react';
import styles from './index.less';
import {olypicColumns1, olympicWinners1} from './dummyData';
import {
  PageContainer,
  ProCard,
  ProDescriptionsItemProps,
  ProTable,
  stringify,
} from '@ant-design/pro-components';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <ProTable columns={olypicColumns1}
      dataSource={olympicWinners1}></ProTable>
    </div>
  );
}
