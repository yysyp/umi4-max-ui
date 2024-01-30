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

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = props;
  }

  render() {
      return (
        <PageContainer ghost>
          <PivotTableUI
              data={pivottableData}
              rows={["school", "class"]}
              cols={["age"]}
              vals={["score"]}
              aggregatorName={"List Unique Values"}
              onChange={s => this.setState(s)}
              {...this.state}
          />
        </PageContainer>
      );
  }
}

export default App;
