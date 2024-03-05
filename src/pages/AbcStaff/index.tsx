import React from 'react';
import styles from './index.less';
import { PageContainer, EditableProTable } from '@ant-design/pro-components';
export default function Page() {
  return (
    <PageContainer header={{title: "AbcStaff"}}>
      <EditableProTable
      rowKey={"id"}
      pagination={{defaultPageSize: 10}}
      
      >

      </EditableProTable>
    </PageContainer>
  );
}
