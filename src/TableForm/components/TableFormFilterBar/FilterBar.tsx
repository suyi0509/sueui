/*
 * @Author: suyi
 * @Date: 2023-04-13 11:49:22
 * @LastEditTime: 2023-05-15 18:32:57
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormFilterBar\FilterBar.tsx
 */
import React, { ReactNode, useEffect, useState } from 'react';
import FilterbarButtons from './FilterBarButtom';
import {
  Button,
  ButtonProps,
  Col,
  Dropdown,
  Form,
  Input,
  message,
  Row,
  Space,
} from 'antd';
import { isPlainObject, isFunction } from 'is-what';
import {
  IFilterBarType,
  IFiltersType,
  IFieldSelect,
  IFieldDatePicker,
  IFieldInputNumber,
  IFilterGroup,
} from './type';
import './index.less';
import {
  FieldInput,
  FieldSelect,
  FieldDatePicker,
  FieldRangePicker,
  FieldCascader,
  FieldInputNumber,
  FieldRadio,
  FieldCheckBox,
} from './fields';
import Item from 'antd/es/list/Item';

const Coptions = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const filterBar: IFilterBarType = {
  // searchButton: {
  //   text: '1确定',
  //   onClick: () => {
  //     console.log('点击搜索');
  //   },
  //   attrs: { shape: 'circle' },
  // },
  // resetButton: { text: '重置3', attrs: { shape: 'circle' } },
  renderButton: () => (
    <div>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </div>
  ),
  // renderButton: (
  //   <div>
  //     <Button type='primary' htmlType='submit'>
  //       Submit
  //     </Button>
  //   </div>
  // ),
  itemsPerRow: 4,
  formAttars: {
    // labelCol: { span: 4 },
    // wrapperCol: { span: 14 },
  },
  filters: [
    {
      type: 'input',
      model: 'test1', //字段名
      label: '输入', // 字段文本说明,
      itemsPerCol: 4,
      componentAttrs: {
        // input
      },
      formItemAttars: {
        style: { width: 120 },
      },
    },
    {
      type: 'select',
      model: 'test2', //字段名
      label: '选择项', // 字段文本说明,
      options: [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
      ],
      componentAttrs: {
        // input
        // style: { width: 10 },
        mode: 'multiple',
      },
      formItemAttars: {
        name: '111',
      },
    },
    {
      type: 'rangePicker',
      model: 'test4', //字段名
      label: '日期范围', // 字段文本说明,
      itemsPerCol: 2,
      componentAttrs: {
        // input
        // style: { width: 10 },
      },
      formItemAttars: {
        name: '111',
      },
    },
    {
      type: 'datePicker',
      model: 'test3', //字段名
      label: '日期', // 字段文本说明,
      picker: 'date',
      componentAttrs: {
        // input
        // style: { width: 10 },
      },
      formItemAttars: {
        name: '111',
      },
    },
    {
      type: 'cascader',
      model: 'test5', //字段名
      label: '联级', // 字段文本说明,
      options: Coptions,
      componentAttrs: {
        // input
        // style: { width: 10 },
      },
      formItemAttars: {},
    },
    {
      type: 'inputNumber',
      model: 'test6', //字段名
      label: '数字框', // 字段文本说明,
      componentAttrs: {
        // input
        // style: { width: 10 },
      },
      formItemAttars: {
        // name: '111',
      },
    },
    {
      type: 'radio',
      model: 'test7', //字段名
      label: '单选项', // 字段文本说明,
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ],
      componentAttrs: {
        // input
        // style: { width: 10 },
      },
      formItemAttars: {
        // name: '111',
      },
    },
    {
      type: 'checkBox',
      model: 'test8', //字段名
      label: '多选项', // 字段文本说明,
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ],
      componentAttrs: {
        // input
        // style: { width: 10 },
      },
      formItemAttars: {
        // name: '111',
      },
    },
  ],
};

const FilterBar = () => {
  useEffect(() => {}, []);

  const renderFilter = (
    filter: IFiltersType | IFilterGroup,
    i: number
  ): ReactNode => {
    if (!filter) return null;
    if (filter.group) {
      // return renderFilerGroup(filter as IFilterGroup, i);
    } else if (isPlainObject(filter)) {
      return renderFormItem(filter as IFiltersType, i);
    }
    return null;
  };

  const renderFilerGroup = (filter: IFilterGroup, i: number): ReactNode => {
    return (
      <div key={i} className='tf-filterbar__group'>
        <div className='tf-filterbar__group_name'>{filter.groupname}</div>
        <Row className='tf-filterbar__group_item' gutter={16}>
          {filter.chilrens.length ? filter.chilrens.map(renderFormItem) : null}
        </Row>
      </div>
    );
  };

  const getColSpan = () => {
    const itemsPerRow = filterBar.itemsPerRow || 4;
    const colSpan = {
      xs: 24,
      sm: 24,
      md: 24,
      lg: Math.ceil(24 / itemsPerRow) * 2,
      xl: Math.ceil(24 / itemsPerRow),
    };
    return colSpan;
  };

  const renderFormItem = (filter: IFiltersType, i: number): ReactNode => {
    if (!(filter && isPlainObject(filter))) return null;
    const colSpan = getColSpan();
    if (filter.type === 'input') {
      return (
        <Col
          key={i}
          style={{ padding: '12px 0px' }}
          {...colSpan}
          xl={filter.itemsPerCol ? colSpan.xl * filter.itemsPerCol : colSpan.xl}
        >
          <FieldInput data={filter} />
        </Col>
      );
    } else if (filter.type === 'inputNumber') {
      return (
        <Col
          key={i}
          style={{ padding: '12px 0px' }}
          {...colSpan}
          xl={filter.itemsPerCol ? colSpan.xl * filter.itemsPerCol : colSpan.xl}
        >
          <FieldInputNumber data={filter as IFieldInputNumber} />
        </Col>
      );
    } else if (filter.type === 'select') {
      return (
        <Col
          key={i}
          style={{ padding: '12px 0px' }}
          {...colSpan}
          xl={filter.itemsPerCol ? colSpan.xl * filter.itemsPerCol : colSpan.xl}
        >
          <FieldSelect data={filter as IFieldSelect} />
        </Col>
      );
    } else if (filter.type === 'datePicker') {
      return (
        <Col
          key={i}
          style={{ padding: '12px 0px' }}
          {...colSpan}
          xl={filter.itemsPerCol ? colSpan.xl * filter.itemsPerCol : colSpan.xl}
        >
          <FieldDatePicker data={filter as IFieldDatePicker} />
        </Col>
      );
    } else if (filter.type === 'rangePicker') {
      return (
        <Col
          key={i}
          style={{ padding: '12px 0px' }}
          {...colSpan}
          xl={filter.itemsPerCol ? colSpan.xl * filter.itemsPerCol : colSpan.xl}
        >
          <FieldRangePicker data={filter as IFieldDatePicker} />
        </Col>
      );
    } else if (filter.type === 'cascader') {
      return (
        <Col
          key={i}
          style={{ padding: '12px 0px' }}
          {...colSpan}
          xl={filter.itemsPerCol ? colSpan.xl * filter.itemsPerCol : colSpan.xl}
        >
          <FieldCascader data={filter as IFieldSelect} />
        </Col>
      );
    } else if (filter.type === 'radio') {
      return (
        <Col
          key={i}
          style={{ padding: '12px 0px' }}
          {...colSpan}
          xl={filter.itemsPerCol ? colSpan.xl * filter.itemsPerCol : colSpan.xl}
        >
          <FieldRadio data={filter as IFieldSelect} />
        </Col>
      );
    } else if (filter.type === 'checkBox') {
      return (
        <Col
          key={i}
          style={{ padding: '12px 0px' }}
          {...colSpan}
          xl={filter.itemsPerCol ? colSpan.xl * filter.itemsPerCol : colSpan.xl}
        >
          <FieldCheckBox data={filter as IFieldSelect} />
        </Col>
      );
    }

    return null;
  };

  const {
    searchButton = true,
    resetButton = true,
    renderButton = null,
    formAttars = {},
    filters = [],
  } = filterBar;
  const showBtn = searchButton || resetButton || renderButton;

  const formItemLayout = {
    labelCol: { span: 6, offset: 2 },
    wrapperCol: { span: 12 },
  };

  const twoformItemLayout = {
    labelCol: { span: 3, offset: 1 },
    wrapperCol: { span: 18 },
  };

  const threeformItemLayout = {
    labelCol: { span: 2, offset: 1 },
    wrapperCol: { span: 18 },
  };

  const fourformItemLayout = {
    labelCol: { span: 1, offset: 1 },
    wrapperCol: { span: 20 },
  };
  return (
    <Form
      className='tf-filterbar'
      layout='inline'
      {...formItemLayout}
      {...formAttars}
    >
      <Row className='tf-filterbar__row'>
        {filters.length && filters.map(renderFilter)}
      </Row>
      {/* <Row>
        {showBtn && (
          <FilterbarButtons
            searchButton={searchButton}
            resetButton={resetButton}
            renderButton={renderButton}
          />
        )}
      </Row> */}
    </Form>
  );
};

export default FilterBar;
