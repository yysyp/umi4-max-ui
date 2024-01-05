import services from '@/services/demo';
import {
  PageContainer,
  ProCard,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';

const { queryOlympicWinnerList } = services.OlympicController;

const olypicColumns: ProDescriptionsItemProps[] = [
  {
    title: 'Athlete',
    dataIndex: 'athlete',
    sorter: (a, b) => {return a.athlete?.localeCompare(b.athlete);},
    filter: true,
    //valueEnum: {}
  },
  {
    title: 'age',
    dataIndex: 'age',
    sorter: (a, b) => {return a.age - (b.age);},
    filter: true,
    valueType: 'number',
    //valueEnum: {}
  },
  {
    title: 'country',
    dataIndex: 'country',
    sorter: (a, b) => {return a.country?.localeCompare(b.country);},
    filter: true,
    //valueEnum: {}
  },
  {
    title: 'year',
    dataIndex: 'year',
    sorter: (a, b) => {return a.year - (b.year);},
    filter: true,
    //valueEnum: {}
  },
  {
    title: 'date',
    dataIndex: 'date',
    sorter: (a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return aTime - bTime;
    },
    filter: true,
    //valueEnum: {}
  },
  {
    title: 'sport',
    dataIndex: 'sport',
    sorter: (a, b) => {return a.sport?.localeCompare(b.sport);},
    filter: true,
    //valueEnum: {}
  },
  {
    title: 'total',
    dataIndex: 'total',
    sorter: (a, b) => {return a.total - (b.total);},
    filter: true,
    valueType: 'number',
    //valueEnum: {}
  },
];

const getQueryOlympicWinnerList = async (params, sorter, filter) => {
  console.log('fetching backend data');
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
export default function Page() {
  return (
    <PageContainer
      header={{
        title: 'Olympic Info',
      }}
    >
      <ProCard tabs={{ type: 'card' }}>
        <ProCard.TabPane key="tab1" tab="tab1">
          <ProTable
            columns={olypicColumns}
            request={getQueryOlympicWinnerList}
            search={{}}
            pagination={{ pageSize: 10 }}
            rowKey="id"
          ></ProTable>
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
}
