/*
 * @Author: suyi
 * @Date: 2023-04-14 16:46:21
 * @LastEditTime: 2023-05-15 18:24:35
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\fields\FieldInput.tsx
 */

import React, { ReactNode, useEffect, useState } from 'react';
import { IFilterBarType, IFiltersType, IFilterGroup } from '../type';
import { Form, Input } from 'antd';

const FieldInput = (props: { data: IFiltersType}) => {
  const { model, label, componentAttrs, formItemAttars } = props.data;

  const formItemLayout = {
    labelCol: { span: 1, offset: 1 },
    wrapperCol: { span: 21 },
  };
  return (
    <Form.Item {...formItemLayout} {...formItemAttars} label={label} name={model} style={{ width: '100%'}} >
      <Input {...componentAttrs} />
    </Form.Item>
  );
};

export default FieldInput;
