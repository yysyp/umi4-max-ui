import React, { useState } from 'react';
import styles from './index.less';

import ReactDOM from 'react-dom';
import { SheetComponent, Switcher } from '@antv/s2-react';
import insertCss from 'insert-css';
import '@antv/s2-react/dist/style.min.css';

//https://antv-s2.gitee.io/zh/examples/react-component/switcher#pivot
//https://antv-s2.gitee.io/zh/examples/react-component/switcher#pivot-with-children

const s2Options = {
  width: 600,
  height: 480,
};

const defaultFields = {
  rows: ['province', 'city'],
  columns: ['type'],
  values: ['price', 'cost'],
};

const defaultSwitcherFields = {
  rows: {
    items: [{ id: 'province' }, { id: 'city' }],
  },
  columns: {
    items: [{ id: 'type' }],
  },
  values: {
    selectable: true,
    items: [{ id: 'price' }, { id: 'cost' }],
  },
};

// 生成 switcher 所需要的 fields 结构
function generateSwitcherFields(updatedResult) {
  return {
    rows: { items: updatedResult.rows.items },
    columns: { items: updatedResult.columns.items },
    values: {
      selectable: true,
      items: updatedResult.values.items,
    },
  };
}

// 生成 dataCfg fields 结构
function generateFields(updatedResult) {
  return {
    rows: updatedResult.rows.items.map((i) => i.id),
    columns: updatedResult.columns.items.map((i) => i.id),
    values: updatedResult.values.items
      .filter(
        (i) =>
          !updatedResult.values.hideItems.find((hide) => hide.id === i.id),
      )
      .map((i) => i.id),
  };
}

export default function SwitcherDemo() {
  const [fields, setFields] = useState(defaultFields);
  const [switcherFields, setSwitcherFields] = useState(
    defaultSwitcherFields,
  );

  const [data, setData] = useState([]);

  fetch(
    'http://localhost:8000/api/v1/queryPenPapers',
  )
    .then((res) => res.json())
    .then((data) => {
      //console.log("--->>" + JSON.stringify(data.data.list));
      setData(data.data.list);  
  });


  const onSubmit = (result) => {
    console.log('result:', result);
    setFields(generateFields(result));
    setSwitcherFields(generateSwitcherFields(result));
  };

  return (
    
    <div>
      <a href='https://antv-s2.gitee.io/zh/examples/theme/custom#custom-manual-palette'>https://antv-s2.gitee.io/zh/examples/theme/custom#custom-manual-palette</a> <br/>
      <a href='http://localhost:8000/api/v1/queryPenPapers'>http://localhost:8000/api/v1/queryPenPapers</a>
      <br/>
      <Switcher {...switcherFields} onSubmit={onSubmit} />
      <SheetComponent
        sheetType={'pivot'}
        adaptive={false}
        dataCfg={{ data, fields }}
        options={s2Options}
        // themeCfg={{
        //   name: 'colorful',
        //   theme: {
        //     dataCell: {
        //       cell: {
        //         crossBackgroundColor: 'pink'
        //       }
        //     }
        //   }
        // }}
        themeCfg={{palette: {"brandColor":"#3471F9","semanticColors":{"red":"#FF4D4F","green":"#29A294","yellow":"#FAAD14"},"others":{"highlight":"#87B5FF","results":"#F0F7FF"},"basicColorRelations":[{"basicColorIndex":1,"standardColorIndex":0},{"basicColorIndex":2,"standardColorIndex":1},{"basicColorIndex":3,"standardColorIndex":5},{"basicColorIndex":4,"standardColorIndex":6},{"basicColorIndex":5,"standardColorIndex":6},{"basicColorIndex":6,"standardColorIndex":6},{"basicColorIndex":7,"standardColorIndex":5},{"basicColorIndex":9,"standardColorIndex":1},{"basicColorIndex":10,"standardColorIndex":4},{"basicColorIndex":11,"standardColorIndex":4},{"basicColorIndex":12,"standardColorIndex":5}],"basicColors":["#FFFFFF","#000000","#E1EAFE","#101e3f","#0f224d","#000000","#ffffff","#000000","#000000","#E1EAFE","#5286FA","#5286FA","#3471F9","#ffffff","#ffffff"]}}}
      />
    </div>
    
  );
};

// 我们用 insert-css 演示引入自定义样式
// 推荐将样式添加到自己的样式文件中
// 若拷贝官方代码，别忘了 npm install insert-css
insertCss(`
  .antv-s2-switcher-item.checkable-item {
    align-items: center;
  }
`);