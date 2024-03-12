import React, { useState } from 'react';
import { Space, Button } from 'antd';
import ProTable, { EditableProTable } from '@ant-design/pro-table';
import { request } from '@umijs/max';

const initialData = [
  {
    id: 1,
    name: 'John Doe',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  // 更多数据...
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    editable: true,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    editable: true,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    editable: true,
  },
];

const Demo = () => {
  const [dataSource, setDataSource] = useState(initialData);

  const handleAdd = async () => {
    const newData = {
      id: dataSource.length + 1,
      name: '',
      age: '',
      address: '',
    };
    setDataSource([...dataSource, newData]);
  };

  const handleSave = async (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    if (index > -1) {
      newData[index] = { ...newData[index], ...row };
      setDataSource(newData);
    } else {
      newData.push(row);
      setDataSource(newData);
    }
  };

  const handleDelete = async (key) => {
    const newData = dataSource.filter(item => item.key !== key);
    setDataSource(newData);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button type="primary" onClick={handleAdd}>
        新增
      </Button>
      <EditableProTable
        rowKey="id"
        headerTitle="用户信息"
        maxLength={5}
        value={dataSource}
        columns={columns}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </Space>
  );
};

export default Demo;