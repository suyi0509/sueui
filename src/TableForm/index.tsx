/*
 * @Author: suyi
 * @Date: 2023-04-12 17:51:55
 * @LastEditTime: 2023-05-15 15:24:44
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\index.tsx
 */
import { Table,Switch } from 'antd';
import type { TableProps } from 'antd/es/table';
import React, { type FC } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {
  TableFormHeader,
  TableFormFilterBar,
  TableFormToolBar,
} from './components';

import './index.less';
import { IToolType } from './components/TableFormToolBar/type';

export interface ITableForm<T> extends TableProps<T> {
  /**
   * @description  我是text属性
   */
  text: string;
}

const toolBarData: IToolType[] = [
  {
    label: '普通按钮',
    type: 'primary',
    onClick: () => {
      console.log('普通按钮');
    },
  },
  {
    label: '下拉菜单',
    tooltype: 'dropdown',
    children: [
      {
        label: '下拉菜单1',
        onClick: () => {
          console.log('下拉菜单1');
        },
      },
      {
        label: '下拉菜单2',
        // onClick: () => {
        //   console.log('下拉菜单2');
        // },
        children: [
          {
            label: '下拉菜单-分裂3',
            key: '1-1',
            icon: <UserOutlined />,
            onClick: () => {
              console.log('下拉菜单-分裂3');
            },
          },
          {
            label: '下拉菜单-分裂4',
            key: '1-2',
            onClick: () => {
              console.log('下拉菜单-分裂4');
            },
          },
        ],
      },
    ],
    onClick: () => {
      console.log('下拉菜单');
    },
  },
  {
    label: '下拉菜单-分裂',
    tooltype: 'dropdownButton',
    children: [
      {
        label: '下拉菜单-分裂1',
        key: '1',
        icon: <UserOutlined />,
        children: [
          {
            label: '下拉菜单-分裂3',
            key: '1-1',
            icon: <UserOutlined />,
            onClick: () => {
              console.log('下拉菜单-分裂3');
            },
          },
          {
            label: '下拉菜单-分裂4',
            key: '1-2',
            onClick: () => {
              console.log('下拉菜单-分裂4');
            },
          },
        ],
      },
      {
        label: '下拉菜单-分裂2',
        key: '2',
        onClick: () => {
          console.log('下拉菜单-分裂2');
        },
      },
    ],
    onClick: () => {
      console.log('下拉菜单');
    },
  },
  () => {
    return (
      <div>
        function: <Switch defaultChecked />
      </div>
    );
  },
  <div>直接node</div>,
  null,
];

const TableForm = <T extends object>(props: ITableForm<T>) => {
  const { text, ...rest } = props;
  return (
    <div>
      <TableFormHeader
        headerTitle={'标题'}
        headerNav={[
          {
            title: 'Home',
          },
          {
            title: <a href=''>Application Center</a>,
          },
        ]}
      />
      <TableFormFilterBar />
      {/* <TableFormToolBar toolBarData={toolBarData} /> */}
      {/* <Table {...rest} /> */}
    </div>
  );
};

export default TableForm;
