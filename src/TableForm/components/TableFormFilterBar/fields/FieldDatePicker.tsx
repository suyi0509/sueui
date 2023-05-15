/*
 * @Author: suyi
 * @Date: 2023-04-14 16:52:59
 * @LastEditTime: 2023-05-15 15:54:51
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\fields\FieldDatePicker.tsx
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { IFilterBarType, IFieldDatePicker, IFilterGroup } from '../type';
import { Form, DatePicker } from 'antd';

const FieldDatePicker = (props: { data: IFieldDatePicker }) => {
  const { model, label, picker = 'date', componentAttrs, formItemAttars } = props.data;
  return (
    <Form.Item
      {...formItemAttars}
      label={label}
      name={model}
      style={{ width: '100%' }}
    >
      <DatePicker picker={picker} {...componentAttrs} />
    </Form.Item>
  );
};

export default FieldDatePicker;
