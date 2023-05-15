/*
 * @Author: suyi
 * @Date: 2023-04-14 16:51:27
 * @LastEditTime: 2023-05-15 16:19:56
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\fields\FieldRadio.tsx
 */
import React, { ReactNode, useEffect, useState } from 'react';
import { IFilterBarType, IFieldSelect, IFilterGroup } from '../type';
import { Form, Radio } from 'antd';

const FieldRadio = (props: { data: IFieldSelect }) => {
  const { model, label, options, componentAttrs, formItemAttars } = props.data;
  return (
    <Form.Item
      {...formItemAttars}
      label={label}
      name={model}
      style={{ width: '100%' }}
    >
      <Radio.Group options={options} {...componentAttrs} />
    </Form.Item>
  );
};

export default FieldRadio;
