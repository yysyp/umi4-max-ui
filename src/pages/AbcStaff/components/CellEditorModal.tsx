import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { PageContainer, EditableProTable } from '@ant-design/pro-components';
import ProTable from '@ant-design/pro-table';
import { Button, message, Modal, Input, Typography } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';



const CellEditorModal = ({title, isModalOpen, modelData, handleOk, handleCancel}) => {

  
  return (

    <Modal title={title} open={isModalOpen} onOk={() => {handleOk(modelData)}} onCancel={handleCancel}>
      <Typography.Title level={5}>Edit Cell Value:</Typography.Title>
      <Input  placeholder={modelData?.value} defaultValue={modelData?.value} />
      
    </Modal>

  );

};

export default CellEditorModal;
