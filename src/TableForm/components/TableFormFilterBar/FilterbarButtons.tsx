/*
 * @Author: suyi
 * @Date: 2023-04-13 11:48:40
 * @LastEditTime: 2023-04-13 18:56:56
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\FilterbarButtons.tsx
 */
import React, { useEffect, useState, useRef } from 'react';
import { Button, Dropdown, Form, MenuProps, Space } from 'antd';
import { isPlainObject, isFunction } from 'is-what';
import { IButtonType } from './type';

const FilterbarButtons = (props: { filterButtons: IButtonType[] }) => {
  const { filterButtons } = props;

  const normalizeButton = (button: IButtonType) => {
    const { label = '', children: _children, ...attrs } = button;
    const children: IButtonType[] = Array.isArray(_children)
      ? _children.map(normalizeButton)
      : [];

    return {
      label,
      children,
      attrs,
    };
  };

  const renderButton = (_button: IButtonType, i: number) => {
    if (!(_button && isPlainObject(_button))) return null;
    if (Array.isArray(_button.children)) {
      return renderDropdownButton(_button, i);
    } else {
      return renderSingleButton(_button, i);
    }
  };

  const renderDropdownButton = (button: IButtonType, i: number) => {
    const { label, attrs } = normalizeButton(button);
    const item: any = [
      {
        label: '1st menu item',
        key: '1',
      },
    ];
    if (button.splitButton) {
      <Dropdown.Button {...attrs} menu={item}>
      </Dropdown.Button>;
    }
    const res = (
      <Dropdown menu={item}>
        <Button>111</Button>
      </Dropdown>
    );
    return res;
  };

  const renderSingleButton = (button: IButtonType, i: number) => {
    const { label, attrs } = normalizeButton(button);
    return (
      <Button {...attrs} key={i}>
        {label}
      </Button>
    );
  };

  return (
    <Form.Item>
      {filterButtons.map((button, i) => renderButton(button, i))}
    </Form.Item>
  );
};

export default FilterbarButtons;
