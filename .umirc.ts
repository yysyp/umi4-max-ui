import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    // dark: true,
    compact: true,
    theme: {
      token: {
        colorPrimary: '#f5222d',
        fontSize: 13,
        colorLink: "#f5222d",
        colorInfo: "#1d262c",
        colorSuccess: "#00847f",
        colorWarning: "#ffbb33",
        colorError: "#a8000b",
        // colorBgBase: "#eeeeee", //this should not set to let go with theme
        // colorTextBase: "#000000", //this should not set to let go with theme
        borderRadius: 1,
        wireframe: true,
      },
      components: {
        Button: {
          borderRadius: 0,
          primaryShadow: "",
          fontWeight: 600,
          colorPrimary: '#00222d',
        },
        Switch: {
          colorPrimary: '#888888',
        },
        Card: {
          colorGgContainer: "rgb(30, 38, 45)",
          colorBorderSecondary: "rgb(60, 80, 90)",
        },
        Table: {
          borderColor: "rgba(255, 255, 255, 0.1)",
        }
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
    //layout: 'mix',
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
    {
      name: 'TestPg1',
      path: 'TestPg1',
      component: './TestPg1',
    },
  ],
  npmClient: 'npm',
  dva: {},
});
