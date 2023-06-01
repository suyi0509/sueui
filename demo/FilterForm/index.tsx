/*
 * @Author: suyi
 * @Date: 2023-06-01 16:17:23
 * @LastEditTime: 2023-06-01 16:18:52
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\demo\FilterForm\index.tsx
 */
import React from 'react';
import { Input } from 'antd';
import { FilterForm } from 'suyi-ui';

const Index: React.FC = () => {
  const filters = [
    { label: '名称', name: 'key', initialValue: '初始值', type: 'input' },
    { label: '名称', name: 'key', initialValue: '初始值', type: 'select' },
    // { label: '名称', name: 'key', initialValue: '初始值', type: 'rangePicker' },
    // { label: '名称', name: 'key', initialValue: '初始值', type: 'datePicker' },
    { label: '时间段', name: 'key', initialValue: '初始值', type: 'input' },
    { label: '时间段', name: 'key', initialValue: '初始值', type: 'input' },
    {
      label: '名称xxx',
      name: 'key',
      initialValue: '初始值',
      type: 'input',
      span: 12,
    },
    { label: '名xxx称', name: 'key', initialValue: '初始值', type: 'input' },
  ];
  return (
    <div>
      demo
      <FilterForm filters={filters} defaultNum={3} />
    </div>
  );
};

export default Index;
