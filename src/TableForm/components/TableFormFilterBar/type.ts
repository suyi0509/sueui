import { ReactNode, useRef } from 'react';
import { ButtonProps, FormItemProps, FormProps } from 'antd';

interface IFiltersType {
  type: 'input' | 'render';
  model: string;
  label: string;
  group?: string; // 组别
  width?: string | number;
  renderFormItem?: ReactNode | (() => ReactNode); // 自定义表单子项
  formItemAttars?: FormItemProps; // 表单子项原始的attrs
  renderComponent?: ReactNode | (() => ReactNode); // 自定义控件
  componentAttrs?: any; // 控件原始的attrs
}

interface IFilterBtnType {
  text?: string;
  onClick?: () => void;
  attrs?: ButtonProps;
}

interface IFilterGroup {
  group: string;
  groupname: string;
  chilrens: IFiltersType[];
}

type filtersType = IFiltersType | IFilterGroup
interface IFilterBtnsType {
  searchButton?: IFilterBtnType | boolean;
  resetButton?: IFilterBtnType | boolean;
  renderButton?: ReactNode | (() => ReactNode);
  formAttars?: FormProps; // 表单原始的attrs
  itemsPerRow?:number // 一行多少个
  filters?: filtersType[]
}

interface IFilterBarType extends IFilterBtnsType {}
export {
  IFilterBtnType,
  IFilterBtnsType,
  IFilterBarType,
  IFiltersType,
  IFilterGroup,
};
