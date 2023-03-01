/*
 * @Author: suyi
 * @Date: 2023-03-01 11:26:48
 * @LastEditTime: 2023-03-01 18:08:38
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\AmTable\index.tsx
 */
import { Table } from 'antd';
import type { TableProps } from 'antd/es/table';
import React, { type FC } from 'react';

import './index.less';

export interface IAmTable<T> extends TableProps<T> {
  /**
   * @description: 我是text属性
   */
  text: string;
}

const AmTable: FC<{ text: string }> = <T extends object>(
  props: IAmTable<T>
) => {
  const { text, ...rest } = props;
  return (
    <div>
      <div className='text'>{text}</div>
      <Table {...rest} />
    </div>
  );
};

export default AmTable;
