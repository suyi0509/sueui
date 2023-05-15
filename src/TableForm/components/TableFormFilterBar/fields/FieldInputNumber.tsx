/*
 * @Author: suyi
 * @Date: 2023-04-14 16:48:03
 * @LastEditTime: 2023-05-15 16:11:09
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\fields\FieldInputNumber.tsx
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { IFilterBarType, IFieldInputNumber, IFilterGroup } from '../type';
import { Form, InputNumber } from 'antd';

const FieldInput = (props: { data: IFieldInputNumber }) => {
  const { model, label, min, max, componentAttrs, formItemAttars } = props.data;
  return (
    <Form.Item
      {...formItemAttars}
      label={label}
      name={model}
      style={{ width: '100%' }}
    >
      <InputNumber min={min} max={max} {...componentAttrs} />
    </Form.Item>
  );
};

export default FieldInput;
