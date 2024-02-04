import React, {useState} from 'react';
import styles from './index.less';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import {sortAs} from 'react-pivottable/Utilities';
import 'react-pivottable/pivottable.css';
import { PageContainer } from '@ant-design/pro-components';
import { MenuFoldOutlined } from '@ant-design/icons';

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

const createCss = (cssText) => {
  const cssEle = document.createElement('style');
  cssEle.type = 'text/css';
  cssEle.appendChild(document.createTextNode(cssText));
  return cssEle;
}

const removeCss = (cssEle) => {
  if (cssEle && cssEle.parentNode) {
    cssEle.parentNode.removeChild(cssEle);
  }
}

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = props;
      this.state = {
        hideMenu: false,
      };
  }

  componentWillUnmount(): void {
    if (this.state.hideMenu) {
      removeCss(this.state.hideMenu);
      this.state.hideMenu = false;
    }
  }

  render() {
      return (
        <PageContainer ghost>
          <MenuFoldOutlined onClick={() => {
            if (this.state.hideMenu) {
              removeCss(this.state.hideMenu);
              this.state.hideMenu = false;
            } else {
              let cssEle = createCss('.pvtAxisContainer, .pvtVals, .pvtDropdownValue { display: none; }');
              this.state.hideMenu = cssEle;
              document.head.appendChild(cssEle);
            }
          }}></MenuFoldOutlined>
          <PivotTableUI
              data={pivottableData}
              rows={["school", "class"]}
              cols={["age"]}
              vals={["score"]}
              aggregatorName={"List Unique Values"}
              onChange={s => this.setState(s)}
              {...this.state}
              sorters={{age: sortAs([16, 13, 11, 14, 12])}}
              //hiddenAttributes={["name"]}
              // this doesn't work hiddenFromAggregators={["Totals"]}
              //rendererName={"Heatmap"}
          />
        </PageContainer>
      );
  }
}

export default App;
