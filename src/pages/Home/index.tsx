import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { MappingAlgorithm, Space, Switch, theme } from 'antd';
import { useAntdConfig, useAntdConfigSetter } from 'umi';
import styles from './index.less';
const { darkAlgorithm, defaultAlgorithm } = theme;

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const setAntdConfig = useAntdConfigSetter();
  const antdConfig = useAntdConfig();
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <Space>
        isDarkTheme
        <Switch
          checked={antdConfig?.theme?.algorithm.includes(darkAlgorithm)}
          onChange={(data) => {
            setAntdConfig((config) => {
              const algorithm = config.theme!.algorithm as MappingAlgorithm[];
              if (algorithm.includes(darkAlgorithm)) {
                config.theme!.algorithm = [defaultAlgorithm];
                localStorage.setItem('themeAlgorithm', 'defaultAlgorithm');
              } else {
                config.theme!.algorithm = [darkAlgorithm];
                localStorage.setItem('themeAlgorithm', 'darkAlgorithm');
              }
              return config;
            });
          }}
        ></Switch>
      </Space>
    </PageContainer>
  );
};

export default HomePage;
