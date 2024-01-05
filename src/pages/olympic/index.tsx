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
    title: 'a',
    dataIndex: 'a',
    //sorter: (o1, o2) => {return o1.a?.localeCompare(o2.a);},
    //filter: true,
    //valueEnum: {}
  },
  { title: 'b', dataIndex: 'b' },
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
            search={false}
            pagination={{ pageSize: 10 }}
            rowKey="id"
          ></ProTable>
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
}
