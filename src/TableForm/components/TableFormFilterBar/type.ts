import { ReactNode, useRef } from 'react';
import { ButtonProps, FormItemProps, FormProps } from 'antd';
interface IFieldInput extends IFilters {}

interface IFieldInputNumber extends IFilters {
  min: number;
  max: number;
}
interface IFieldSelect extends IFilters {
  options: Array<any>;
}

interface IFieldDatePicker extends IFilters {
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
}

interface IFilters {
  type:
    | 'input'
    | 'inputNumber'
    | 'select'
    | 'datePicker'
    | 'rangePicker'
    | 'cascader'
    | 'radio'
    | 'checkBox'
    | 'render';
  model: string;
  label: string;
  group?: string; // 组别
  width?: string | number;
  itemsPerCol?: number; // 占行比
  renderFormItem?: ReactNode | (() => ReactNode); // 自定义表单子项
  formItemAttars?: FormItemProps; // 表单子项原始的attrs
  renderComponent?: ReactNode | (() => ReactNode); // 自定义控件
  componentAttrs?: any; // 控件原始的attrs
}
type IFiltersType =
  | IFieldInput
  | IFieldInputNumber
  | IFieldSelect
  | IFieldDatePicker;

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

type filtersType = IFiltersType | IFilterGroup;
interface IFilterBtnsType {
  searchButton?: IFilterBtnType | boolean;
  resetButton?: IFilterBtnType | boolean;
  renderButton?: ReactNode | (() => ReactNode);
  formAttars?: FormProps; // 表单原始的attrs
  itemsPerRow?: number; // 一行多少个
  filters?: filtersType[];
}

interface IFilterBarType extends IFilterBtnsType {}
export {
  IFilterBtnType,
  IFilterBtnsType,
  IFilterBarType,
  IFiltersType,
  IFilterGroup,
  IFieldSelect,
  IFieldDatePicker,
  IFieldInputNumber,
};
