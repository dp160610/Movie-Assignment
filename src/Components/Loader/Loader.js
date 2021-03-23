import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 150}} spin />;

const Loader = () => {
    return ( 
    <div style={{marginLeft: "auto", marginRight: "auto"}}>
   <Spin indicator={antIcon} />
    </div>
  );
}
 
export default Loader;