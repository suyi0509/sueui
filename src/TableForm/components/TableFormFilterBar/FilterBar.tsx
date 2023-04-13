/*
 * @Author: suyi
 * @Date: 2023-04-13 11:49:22
 * @LastEditTime: 2023-04-13 18:56:48
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\FilterBar.tsx
 */
import React, { useEffect, useState } from 'react';
import FilterbarButtons from './FilterbarButtons';
import {
  Button,
  ButtonProps,
  Dropdown,
  Form,
  Input,
  message,
  Space,
} from 'antd';
import { IButtonType } from './type';

const filterButtons: IButtonType[] = [
  {
    label: '添加',
    type: 'default',
    onClick: () => {
      console.log('8888');
    },
    splitButton:true,
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

const FilterBar = () => {
  return <FilterbarButtons filterButtons={filterButtons} />;
};

export default FilterBar;
