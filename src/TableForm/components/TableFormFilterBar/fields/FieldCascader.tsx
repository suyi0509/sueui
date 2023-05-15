/*
 * @Author: suyi
 * @Date: 2023-04-14 16:48:55
 * @LastEditTime: 2023-04-14 16:49:07
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\fields\FieldCascader.tsx
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { IFilterBarType, IFieldSelect, IFilterGroup } from '../type';
import { Form, Cascader } from 'antd';

const FieldCascader = (props: { data: IFieldSelect }) => {
  const { model, label, options, componentAttrs, formItemAttars } = props.data;
  return (
    <Form.Item
      {...formItemAttars}
      label={label}
      name={model}
      style={{ width: '100%' }}
    >
      <Cascader {...componentAttrs} options={options} />
    </Form.Item>
  );
};

export default FieldCascader;
