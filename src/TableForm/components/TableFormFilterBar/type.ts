import { ReactNode, useRef } from 'react';
import { ButtonProps } from 'antd';

interface IButtonType extends Omit<ButtonProps, 'children'> {
  label: string;
  children?: IButtonType[];
  splitButton?:Boolean
}
export { IButtonType };
