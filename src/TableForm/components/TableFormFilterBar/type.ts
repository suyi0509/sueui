import { ReactNode, useRef } from 'react';
import { ButtonProps } from 'antd';

// interface IButtonType extends Omit<ButtonProps, 'children'> {
//   label: string;
//   children?: IButtonType[];
//   splitButton?:Boolean
// }
// export { IButtonType };
interface IFilterBtnType {
  text?: string;
  OnClick?: () => void;
  attrs?: ButtonProps;
}

interface IFilterBtnsType {
  searchButton?: IFilterBtnType | boolean;
  resetButton?: IFilterBtnType | boolean;
  renderButton?: ReactNode | (() => ReactNode);
}

interface IFilterBarType extends IFilterBtnsType {}
export { IFilterBtnType, IFilterBtnsType, IFilterBarType };
