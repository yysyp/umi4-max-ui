// 运行时配置

import { RuntimeConfig } from '@umijs/max';
import { theme } from 'antd';

//import {} from '@ant-design/pro-components';


// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    rightContentRender: () => {return "";}, // To hide the avatar icon and locale setting button.
    layout: "mix",
  };
};

export const antd: RuntimeConfig = (memo) => {
  let themeAlgorithm = localStorage.getItem('themeAlgorithm');
  memo.theme ??= {};
  if (themeAlgorithm == 'defaultAlgorithm') {
    memo.theme.algorithm = [theme.defaultAlgorithm];
  } else {
    memo.theme.algorithm = [theme.darkAlgorithm];
  }
  //memo.theme.algorithm = [theme.darkAlgorithm];

  memo.appConfig = {
    message: {
      maxCount: 3,
    },
  };

  return memo;
};
