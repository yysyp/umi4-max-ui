import React, {useState} from 'react';
import styles from './index.less';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import { PageContainer } from '@ant-design/pro-components';

const pivottableData = [
["school", "class", "name", "age", "score"],
["xd1", "g1", "xq", 11, 89],
["xd1", "g1", "re", 11, 99],
["xd1", "g2", "xerq", 12, 75],
["xd1", "g2", "ye", 13, 54],
["xd1", "g3", "ed", 14, 43],
["xd2", "g1", "tr", 11, 89],
["xd2", "g1", "rt", 16, 54],
["xd2", "g2", "rf", 13, 78],
["xd2", "g2", "tr", 13, 36],
["xd2", "g3", "ftr", 14, 78],
];

export default function Page() {
  return (
    
    <div>
      <h1 className={styles.title}>Pivot Table</h1>
      <PageContainer ghost>
        <PivotTableUI data={pivottableData}
        ></PivotTableUI>
      </PageContainer>
    </div>
  );
}
