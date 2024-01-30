import services from '@/services/demo';
import {
  PageContainer,
  ProCard,
  ProDescriptionsItemProps,
  ProTable,
  stringify,
} from '@ant-design/pro-components';
import {useRef, useState} from 'react';
import { Button, Flex } from 'antd';

const { queryOlympicWinnerList } = services.OlympicController;

const olypicColumns: ProDescriptionsItemProps[] = [
  {
    title: 'Athlete',
    dataIndex: 'athlete',
    sorter: (a, b) => {return a.athlete?.localeCompare(b.athlete);},
    filters: true,
    //valueEnum: {}
  },
  {
    title: 'age',
    dataIndex: 'age',
    sorter: (a, b) => {return a.age - (b.age);},
    filters: true,
    valueType: 'number',
    //valueEnum: {}
  },
  {
    title: 'country',
    dataIndex: 'country',
    sorter: (a, b) => {return a.country?.localeCompare(b.country);},
    filters: true,
    onFilter: true,
    valueType: 'text',
    valueEnum: {
      "United States":{text: "United States"}, 
      "Russia":{text: "Russia"},
      "Australia":{text: "Australia"},
      "Canada":{text: "Canada"},
      "Norway":{text: "Norway"},
      "China":{text: "China"},
    },
  },
  {
    title: 'year',
    dataIndex: 'year',
    sorter: (a, b) => {return a.year - (b.year);},
    filters: true,
    onFilter: true,
    hideInSearch: true,
    hideInTable: true,
    valueEnum: {}
  },
  {
    title: 'date',
    dataIndex: 'date',
    sorter: (a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return aTime - bTime;
    },
    filters: true,
    hideInSearch: true,
    valueType: 'date',
    //valueEnum: {}
  },
  {
    title: 'sport',
    dataIndex: 'sport',
    sorter: (a, b) => {return a.sport?.localeCompare(b.sport);},
    filters: true,
    hideInSearch: true,
    //valueEnum: {}
  },
  {
    title: 'total',
    dataIndex: 'total',
    sorter: (a, b) => {return a.total - (b.total);},
    filters: true,
    valueType: 'number',
    hideInSearch: true,
    //valueEnum: {}
  },
];

const getQueryOlympicWinnerList = async (params, sorter, filter) => {
  console.log('fetching backend data ||params:'+stringify(params)+"\t||sorter:"+stringify(sorter)+"\t||filter:"+stringify(filter));
  const { data, success } = await queryOlympicWinnerList({
    ...params,
    sorter,
    filter,
  });
  return {
    data: data?.list || [],
    success,
  };
};

// interface ActionType {
//   reload: (resetPageIndex?: boolean) => void;
//   reloadAndRest: () => void;
//   reset: () => void;
//   clearSelected?: () => void;
//   startEditable: (rowKey: Key) => boolean;
//   cancelEditable: (rowKey: Key) => boolean;
// }

export default function Page() {
  
  const ref = useRef();
  //let params = useState({});

  return (
    <PageContainer
      header={{
        title: 'Olympic Info',
      }}
    >
      <Flex gap="small" wrap="wrap">
        <Button type="primary" onClick={() => {
          console.log("===>ref="+stringify(ref.current)+"\t||params="+stringify(params));
          ref.current?.reload();
        }}>Primary Button</Button>
      </Flex>
      <ProCard tabs={{ type: 'card' }}>
        <ProCard.TabPane key="tab1" tab="tab1">
          <ProTable
            columns={olypicColumns}
            request={getQueryOlympicWinnerList}
            search={{collapsed: false, collapseRender: () => null}}
            pagination={{ defaultPageSize: 10 }}
            rowKey="id"
            actionRef={ref}
            sticky={{ offsetHeader: 48 }}
            columnsState={{defaultValue: {"country": {"show": false}, "age": {"show": false}}}}
          ></ProTable>
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
}
