/*
 * @Author: suyi
 * @Date: 2023-04-13 11:48:40
 * @LastEditTime: 2023-04-14 16:14:43
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormToolBar\ToolBarButtons.tsx
 */
import React from 'react';
import { Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { isPlainObject } from 'is-what';
import { IButtonType } from './type';

const ToolBarButtons = (props: { button: IButtonType }) => {
  const { button } = props;

  const normalizeButton = (
    button: IButtonType,
    index?: number,
    isChildren = false
  ): any => {
    const { label = '', tooltype = 'button', children, ...attrs } = button;
    const normalizedChildren = children?.map((child, childIndex) =>
      normalizeButton(child, childIndex, true)
    );
    return isChildren
      ? {
          key: `${label}-${index}`,
          ...attrs,
          label,
          children: normalizedChildren,
        }
      : { label, tooltype, attrs, children: normalizedChildren };
  };

  const renderButton = () => {
    if (!(button && isPlainObject(button))) return null;
    if (button.tooltype === 'dropdownButton') {
      return renderDropdownButton(button);
    } else if (button.tooltype === 'dropdown') {
      return renderDropdown(button);
    } else {
      return renderSingleButton(button);
    }
  };

  const renderDropdownButton = (_button: IButtonType) => {
    const { label, attrs, children } = normalizeButton(_button);
    const menuProps = { items: children };
    return (
      <Dropdown.Button {...attrs} menu={menuProps}>
        {label}
      </Dropdown.Button>
    );
  };

  const renderDropdown = (_button: IButtonType) => {
    const { label, attrs, children } = normalizeButton(_button);
    const menuProps = { items: children };
    return (
      <Dropdown menu={menuProps} {...attrs}>
        <Button>
          {label}
          <DownOutlined />
        </Button>
      </Dropdown>
    );
  };

  const renderSingleButton = (button: IButtonType) => {
    const { label, attrs } = normalizeButton(button);
    return <Button {...attrs}>{label}</Button>;
  };

  return renderButton();
};

export default ToolBarButtons;
