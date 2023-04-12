/*
 * @Author: suyi
 * @Date: 2023-04-12 17:51:55
 * @LastEditTime: 2023-04-12 18:50:21
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\index.tsx
 */
import { Table } from 'antd';
import type { TableProps } from 'antd/es/table';
import React, { type FC } from 'react';
import { TableFormHeader } from './components';

import './index.less';

export interface ITableForm<T> extends TableProps<T> {
  /**
   * @description  我是text属性
   */
  text: string;
}

const TableForm = <T extends object>(props: ITableForm<T>) => {
  const { text, ...rest } = props;
  return (
    <div>
      <TableFormHeader
        headerTitle={'1'}
        headerNav={[
          {
            path: '/home',
            breadcrumbName: 'Home',
          },
          {
            path: '/home/detail',
            breadcrumbName: 'detail',
          },
        ]}
      />
      {/* <Table {...rest} /> */}
    </div>
  );
};

export default TableForm;
