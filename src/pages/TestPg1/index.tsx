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

import { SheetComponent, Switcher } from "@antv/s2-react";
import '@antv/s2-react/dist/style.min.css';

// 1. 准备数据
const data = [
  {
    province: "浙江",
    city: "杭州",
    type: "家具",
    sub_type: "桌子",
    price: "1",
  },
  {
    province: "浙江",
    city: "杭州",
    type: "家具",
    sub_type: "沙发",
    price: "2",
  },
  {
    province: "浙江",
    city: "杭州",
    type: "办公用品",
    sub_type: "笔",
    price: "3",
  },
  {
    province: "浙江",
    city: "杭州",
    type: "办公用品",
    sub_type: "纸张",
    price: "4",
  },
];

// 2. 配置数据
const dataCfg = {
  fields: {
    rows: ["province", "city"],
    columns: ["type", "sub_type"],
    values: ["price"]
  },
  data,
};

// 3. 添加配置
const options = {
  width: 600,
  height: 600,
};


export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <ProTable columns={olypicColumns1}
      dataSource={olympicWinners1}></ProTable>

    <hr/>
    <div>
      <SheetComponent
        dataCfg={dataCfg}
        options={options}
      />
    </div>

    </div>
  );
}
