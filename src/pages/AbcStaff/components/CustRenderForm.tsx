import React, { useState, useEffect, useRef } from 'react';
import styles from './index.less';
import { PageContainer, EditableProTable } from '@ant-design/pro-components';
import ProTable from '@ant-design/pro-table';
import { Button, message, Modal, Input, Typography, Space, Tag } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';


const CustRenderForm = ({ value, onChange }) => {
    const ref = useRef<Input | null>(null);
    
    const [inputValue, setInputValue] = useState<string>(value);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      console.log("handleInputChange: inputValue="+inputValue);
    };
  
    const handleInputConfirm = () => {
      //let tempsTags = [...(value || [])];
      console.log("handleInputConfirm: inputValue="+inputValue);
      onChange?.(inputValue);
    
    };
  
    return (
      <Space>
        {/* {Array.from(value || []).concat(newTags).map((item) => (
          <Tag key={item.key}>{item.label}</Tag>
        ))} */}
        <Input
          ref={ref}
          type="text"
          size="small"
          style={{ backgroundColor: 'red' }}
          defaultValue={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      </Space>
    );
  };

export default CustRenderForm;
