import React, { useState, useEffect } from 'react';  
import styles from './index.less';
import { PageContainer, EditableProTable } from '@ant-design/pro-components';
import ProTable from '@ant-design/pro-table';  
import { Button, message } from 'antd';  
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Page() {
  const [tableData, setTableData] = useState([]);  
  const [loading, setLoading] = useState(false);  

  useEffect(() => {  
    setLoading(true);  
    fetchData().then((data) => {  
      setTableData(data || []);  
      setLoading(false);  
    });  
  }, []);

    // // 假设的API调用函数，你需要替换为实际的函数  
    const fetchData = async () => {  
      // 从API获取数据  
      const response = await fetch('/api/mytftemplate/abc-staff/rf-query');  
      const data = await response.json();  
      setTableData(data || []);  
    };  

    // // 假设的更新数据API调用函数，你需要替换为实际的函数  
    // const updateData = async (record) => {  
    //   // 发送PUT请求更新数据  
    //   const response = await fetch('/api/abc_staff/' + record.id, {  
    //     method: 'PUT',  
    //     headers: {  
    //       'Content-Type': 'application/json',  
    //     },  
    //     body: JSON.stringify(record),  
    //   });  
        
    //   if (response.ok) {  
    //     message.success('数据更新成功！');  
    //     // 重新获取数据以更新表格  
    //     fetchData();  
    //   } else {  
    //     message.error('数据更新失败！');  
    //   }  
    // };  
    
    // // 假设的删除数据API调用函数，你需要替换为实际的函数  
    // const deleteData = async (id) => {  
    //   // 发送DELETE请求删除数据  
    //   const response = await fetch('/api/abc_staff/' + id, {  
    //     method: 'DELETE',  
    //   });  
        
    //   if (response.ok) {  
    //     message.success('数据删除成功！');  
    //     // 重新获取数据以更新表格  
    //     fetchData();  
    //   } else {  
    //     message.error('数据删除失败！');  
    //   }  
    // };  

  const columns = [  
    {  
      title: 'ID',  
      dataIndex: 'id',  
      valueType: 'digit',  
      width: 60,  
    },  
    {  
      title: 'Created By',  
      dataIndex: 'createdBy',  
      width: 150,  
    },  
    {  
      title: 'Created On',  
      dataIndex: 'createdOn',  
      valueType: 'dateTime',  
      width: 180,  
    },  
    {  
      title: 'Is Active',  
      dataIndex: 'isActive',  
      valueType: 'boolean',  
      width: 80,  
    },  
    {  
      title: 'Is Logical Deleted',  
      dataIndex: 'isLogicalDeleted',  
      valueType: 'boolean',  
      width: 120,  
    },  
    {  
      title: 'Modified By',  
      dataIndex: 'modifiedBy',  
      width: 150,  
    },  
    {  
      title: 'Modified On',  
      dataIndex: 'modifiedOn',  
      valueType: 'dateTime',  
      width: 180,  
    },  
    {  
      title: 'First Name',  
      dataIndex: 'firstName',  
      width: 100,  
      editable: true,  
    },  
    {  
      title: 'Last Name',  
      dataIndex: 'lastName',  
      width: 100,  
      editable: true,  
    },  
    {  
      title: 'Age',  
      dataIndex: 'age',  
      width: 80,  
      editable: true,  
    },  
    {  
      title: 'Score',  
      dataIndex: 'score',  
      width: 100,  
      valueType: 'digit',  
      editable: true,  
    },  
    {  
      title: 'Passed',  
      dataIndex: 'passed',  
      valueType: 'boolean',  
      width: 80,  
      editable: true,  
    },  
    {  
      title: 'Birthday',  
      dataIndex: 'birthday',  
      valueType: 'date',  
      width: 120,  
      editable: true,  
    },  
    {  
      title: 'Comments',  
      dataIndex: 'comments',  
      width: 200,  
      editable: true,  
    },  
    // {  
    //   title: 'Operation',  
    //   dataIndex: 'operation',  
    //   valueType: 'option',  
    //   render: (_, record) => (  
    //     <>  
    //       <Button type="link" onClick={() => {console.log("edit="+record)}}>  
    //         <EditOutlined /> 编辑  
    //       </Button>  
    //       <Button type="link" danger onClick={() => {console.log("delete="+record)}}>  
    //         <DeleteOutlined /> 删除  
    //       </Button>  
    //     </>  
    //   ),  
    // } 
  ];

  return (
    <PageContainer header={{title: "AbcStaff"}}>
      

    <EditableProTable  
      columns={columns}  
      dataSource={tableData}  
      loading={loading}  
      rowKey="id"  
      toolBarRender={() => [  
        <Button type="primary" icon={<PlusOutlined />}>  
          新建  
        </Button>,  
      ]}  
      pagination={{  
        pageSize: 10,  
        total: tableData.length,  
        current: 1,  
        onChange: (pagination) => {  
          // 处理分页变化，如果需要从API获取分页数据的话  
        },  
      }}  
    />
    </PageContainer>
  );

}
