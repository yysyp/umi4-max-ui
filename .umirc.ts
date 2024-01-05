import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    dark: true,
    compact: true,
    theme: {
      token: {
        colorPrimary: '#f5222d',
      },
      // algorithm: 'theme.darkAlgorithm',
    },
    appConfig: {},
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  locale: {
    default: 'en-US',
    baseSeparator: '-',
  },

  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: 'CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: 'olympic table',
      path: 'olympic',
      component: './olympic',
    },
  ],
  npmClient: 'npm',
  dva: {},
});
