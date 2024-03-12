import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { PageContainer, EditableProTable } from '@ant-design/pro-components';
import ProTable from '@ant-design/pro-table';
import { Button, message, Modal, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { abcStaffList } from './dummyData';
import CellEditorModal from './components/CellEditorModal';
import CustRenderForm from './components/CustRenderForm';


export default function Page() {
  const [tableData, setTableData] = useState(abcStaffList.list);
  const [loading, setLoading] = useState(false);
  const [editableKeys, setEditableKeys] = useState<React.Key[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelData, setModelData] = useState('');
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (md) => {
    console.log("handleOk md="+md);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData().then((data) => {
      // setTableData(data || []); 
      setTableData(abcStaffList.list);
      setLoading(false);
    });
  }, []);

  // // 假设的API调用函数，你需要替换为实际的函数  
  const fetchData = async () => {
    // 从API获取数据  
    // const response = await fetch('/api/mytftemplate/abc-staff/rf-query');  
    // const data = await response.json();  
    // setTableData(data || []);
    setTableData(abcStaffList.list);

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
    // {  
    //   title: 'ID',  
    //   dataIndex: 'id',  
    //   valueType: 'digit',  
    //   width: 60,  
    // },  
    // {  
    //   title: 'Created By',  
    //   dataIndex: 'createdBy',  
    //   width: 150,  
    // },  
    // {  
    //   title: 'Created On',  
    //   dataIndex: 'createdOn',  
    //   valueType: 'dateTime',  
    //   width: 180,  
    // },  
    // {  
    //   title: 'Is Active',  
    //   dataIndex: 'isActive',  
    //   valueType: 'boolean',  
    //   width: 80,  
    // },  
    // {  
    //   title: 'Is Logical Deleted',  
    //   dataIndex: 'isLogicalDeleted',  
    //   valueType: 'boolean',  
    //   width: 120,  
    // },  
    // {  
    //   title: 'Modified By',  
    //   dataIndex: 'modifiedBy',  
    //   width: 150,  
    // },  
    // {  
    //   title: 'Modified On',  
    //   dataIndex: 'modifiedOn',  
    //   valueType: 'dateTime',  
    //   width: 180,  
    // },  
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
      render: (text: ReactNode, record, index, action) => {
        return {
          props: {
            style: {background: 'grey'}
          },
          children: <div>{record.comments}</div>

        }
      },
      align: 'center',

      renderFormItem: (_, { isEditable }) => {
        //console.log("text="+JSON.stringify(text));
        console.log("_.comments="+_.entry.comments);
        return (<div onClick={() => {
          console.log("div click="+JSON.stringify(_.entry));
          setModelData({'id': _.entry.id, 'value': _.entry.comments});
          showModal();
        }}>{_.entry.comments}</div>);
      },

      // renderFormItem: (_, { isEditable }) => {
      //   console.info("renderFormItem, _="+JSON.stringify(_));
      //   return isEditable ? <CustRenderForm/> : <Input /> 
      // },
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      valueType: 'option',
      render: (text, record, _, action) => (
        <>
          <Button type="link" onClick={() => { action?.startEditable?.(record.id) }}>
            <EditOutlined /> Edit
          </Button>
          <Button type="link" danger onClick={() => { setTableData(tableData.filter((item) => item.id !== record.id)); }}>
            <DeleteOutlined /> Del
          </Button>
        </>
      ),
    }
  ];

  return (
    <PageContainer header={{ title: "AbcStaff" }}>


      <EditableProTable
        columns={columns}
        value={tableData}
        onChange={setTableData}
        // loading={loading}  
        rowKey="id"
        // toolBarRender={() => [  
        //   <Button type="primary" icon={<PlusOutlined />}>  
        //     New  
        //   </Button>,  
        // ]}  
        pagination={{ defaultPageSize: 5 }}
        recordCreatorProps={{
          position: 'buttom',
          record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
        }}
        editable={{
          type: 'single',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            //creating or editing
            console.log("onSave rowkey=" + rowKey + ", data=" + data + ", row=" + row);
          },
          onChange: setEditableKeys,
          actionRender: (row, config, dom) => [dom.save, dom.cancel],
        }}
      />

      <CellEditorModal 
      title="Editor" 
      isModalOpen={isModalOpen} 
      modelData={modelData}
      handleOk={handleOk}
      handleCancel={handleCancel}>
      </CellEditorModal>
    </PageContainer>
  );

}
