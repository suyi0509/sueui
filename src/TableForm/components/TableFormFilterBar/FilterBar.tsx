/*
 * @Author: suyi
 * @Date: 2023-04-13 11:49:22
 * @LastEditTime: 2023-04-14 18:33:19
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\FilterBar.tsx
 */
import React, { useEffect, useState } from 'react';
import FilterbarButtons from './FilterBarButtom';
import {
  Button,
  ButtonProps,
  Dropdown,
  Form,
  Input,
  message,
  Space,
} from 'antd';
import { IFilterBarType } from './type';

const filterBar: IFilterBarType = {
  searchButton: {
    text: '确定',
    OnClick: () => {
      console.log('点击搜索');
    },
    attrs: { shape: 'circle' },
  },
  resetButton: { text: '重置3', attrs: { shape: 'circle' } },
  // renderButton: () => {
  //   <div>
  //     <Button type='primary' htmlType='submit'>
  //       Submit
  //     </Button>
  //   </div>;
  // },
  renderButton: (
    <div>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </div>
  ),
};

const FilterBar = () => {
  const { searchButton, resetButton, renderButton } = filterBar;
  return (
    <Form className='tf-filterbar'>
      <Form.Item
        className='tf-filterbar__item'
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <FilterbarButtons
        searchButton={searchButton}
        resetButton={resetButton}
        renderButton={renderButton}
      />
    </Form>
  );
};

export default FilterBar;
