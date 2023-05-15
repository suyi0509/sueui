/*
 * @Author: suyi
 * @Date: 2023-04-14 16:53:22
 * @LastEditTime: 2023-05-15 18:28:57
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\fields\FieldRangePicker.tsx
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { IFilterBarType, IFieldDatePicker, IFilterGroup } from '../type';
import { Form, DatePicker } from 'antd';

const FieldRangePicker = (props: { data: IFieldDatePicker }) => {
  const {
    model,
    label,
    picker = 'date',
    componentAttrs,
    formItemAttars,
  } = props.data;
  const { RangePicker } = DatePicker;

  const twoformItemLayout = {
    labelCol: { span: 3, offset: 1 },
    wrapperCol: { span: 18 },
  };

  return (
    <Form.Item
      {...twoformItemLayout}
      {...formItemAttars}
      label={label}
      name={model}
      style={{ width: '100%' }}
    >
      <RangePicker style={{ width: '100%' }} {...componentAttrs} />
    </Form.Item>
  );
};

export default FieldRangePicker;
