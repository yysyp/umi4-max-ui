import { Layout, Row, Typography } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';
import styles from './Guide.less';

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          <FormattedMessage id="welcome" values={{ name: name }} />
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Guide;
