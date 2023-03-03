/*
 * @Author: suyi
 * @Date: 2023-03-01 11:26:48
 * @LastEditTime: 2023-03-02 13:51:24
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\SyTable\index.tsx
 */
import { Table } from 'antd';
import type { TableProps } from 'antd/es/table';
import React, { type FC } from 'react';

import './index.less';

export interface ISyTable<T> extends TableProps<T> {
  /**
   * @description  我是text属性
   */
  text: string;
}

const SyTable = <T extends object>(
  props: ISyTable<T>
) => {
  const { text, ...rest } = props;
  return (
    <div>
      <div className='text'>{text}1222345566</div>
      <Table {...rest} />
    </div>
  );
};

export default SyTable;
