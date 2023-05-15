import React, { ReactNode, useEffect, useState } from 'react';
import { IFilterBarType, IFieldSelect, IFilterGroup } from '../type';
import { Form, Checkbox } from 'antd';

const FieldCheckBox = (props: { data: IFieldSelect }) => {
  const { model, label, options, componentAttrs, formItemAttars } = props.data;
  return (
    <Form.Item
      {...formItemAttars}
      label={label}
      name={model}
      style={{ width: '100%' }}
    >
      <Checkbox.Group options={options} {...componentAttrs} />
    </Form.Item>
  );
};

export default FieldCheckBox;
