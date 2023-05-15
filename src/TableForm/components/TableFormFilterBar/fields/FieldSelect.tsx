/*
 * @Author: suyi
 * @Date: 2023-04-14 16:47:20
 * @LastEditTime: 2023-05-15 16:53:37
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\fields\FieldSelect.tsx
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { IFilterBarType, IFieldSelect, IFilterGroup } from '../type';
import { Form, Select } from 'antd';

const FieldSelect = (props: { data: IFieldSelect }) => {
  const { model, label, options, componentAttrs, formItemAttars } = props.data;
  return (
    <Form.Item
      {...formItemAttars}
      label={label}
      name={model}
      style={{ width: '100%' }}
    >
      <Select style={{ width: '100%' }} {...componentAttrs} options={options} />
    </Form.Item>
  );
};

export default FieldSelect;
