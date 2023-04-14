/*
 * @Author: suyi
 * @Date: 2023-04-13 11:49:22
 * @LastEditTime: 2023-04-14 10:00:04
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\Demo.tsx
 */
import React, { useEffect, useState } from 'react';
import ToolBarButtons from './ToolBarButtons';
import {
  Switch,
  ButtonProps,
  Dropdown,
  Form,
  Input,
  message,
  Space,
} from 'antd';

// import AmTable from "./SyTable"

const filterButtons = [
  {
    label: '添加',
    type: 'default',
    onClick: () => {
      console.log('8888');
    },
    splitButton: true,
    children: [
      {
        label: '添加',
        onClick: () => {
          console.log('8888');
        },
      },
    ],
  },
];

const headerNav = [
  {
    title: 'Home',
  },
  {
    title: <a href=''>Application Center</a>,
  },
];

const toolBar = [
  {
    label: '普通按钮',
    toolType: 'button',
    onClick: () => {
      console.log('普通按钮');
    },
  },
  {
    label: '下拉菜单',
    toolType: 'dropdown',
    children: [
      {
        label: '下拉菜单1',
        onClick: () => {
          console.log('下拉菜单1');
        },
      },
      {
        label: '下拉菜单2',
        onClick: () => {
          console.log('下拉菜单2');
        },
      },
    ],
    onClick: () => {
      console.log('下拉菜单');
    },
  },
  {
    label: '下拉菜单-分裂',
    toolType: 'dropdownButton',
    children: [
      {
        label: '下拉菜单-分裂1',
        onClick: () => {
          console.log('下拉菜单-分裂1');
        },
      },
      {
        label: '下拉菜单-分裂2',
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
    return <Switch defaultChecked />;
  },
];

const filterBar = {
  searchButton: {
    text: '搜索',
    OnClick: () => {
      console.log('点击搜索');
    },
    attrs: { shape: 'circle' },
  },
  resetButton: { text: '重置', attrs: { shape: 'circle' } },
  readerButton: () => {
    <div>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </div>;
  },
  // readerButton: (
  //   <div>
  //     <Button type='primary' htmlType='submit'>
  //       Submit
  //     </Button>
  //   </div>
  // ),
};
const Demo = () => {
  return (
    <div>
      <AmTable
        // 头部
        headerTitle={'标题'} // 标题
        headerNav={headerNav} // 面包屑
        // 操作台
        toolBar={toolBar}
        filterBar={filterBar}
      />
    </div>
  );
};

export default Demo;
