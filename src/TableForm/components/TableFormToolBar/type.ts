/*
 * @Author: suyi
 * @Date: 2023-04-14 09:28:43
 * @LastEditTime: 2023-04-14 14:54:25
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormToolBar\type.ts
 */
import { ReactNode, useRef } from 'react';
import { ButtonProps } from 'antd';

/** 按钮类型 */
declare const ToolTypes: readonly ['button', 'dropdown', 'dropdownButton'];
type ButtonType = (typeof ToolTypes)[number];

interface IButtonType extends Omit<ButtonProps, 'children'> {
  label: string;
  key?: string;
  tooltype?: ButtonType;
  children?: IButtonType[];
}

// 工具类型
type IToolType = IButtonType | React.ReactNode | (() => ReactNode);

export { IButtonType, IToolType };
