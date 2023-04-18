/*
 * @Author: suyi
 * @Date: 2023-04-13 11:49:22
 * @LastEditTime: 2023-04-18 11:52:24
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
import { IFilterBarType, IFiltersType, IFilterGroup } from './type';
import './index.less';
import { FieldInput } from './fields';
import Item from 'antd/es/list/Item';

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
  itemsPerRow: 5,
  formAttars: {
    // labelCol: { span: 4 },
    // wrapperCol: { span: 14 },
  },
  filters: [
    {
      type: 'input',
      model: 'test', //字段名
      label: '起始日期', // 字段文本说明,
      componentAttrs: {
        // input
      },
      formItemAttars: {
        name: '111',
      },
    },
    {
      group: 'g1',
      groupname: '组分类',
      chilrens: [
        {
          type: 'input',
          model: 'test', //字段名
          label: '起始日期6', // 字段文本说明,
          componentAttrs: {
            // input
          },
          formItemAttars: {
            name: '111',
          },
        },
        {
          type: 'input',
          model: 'test', //字段名
          label: '名称', // 字段文本说明,
          componentAttrs: {
            // input
          },
          formItemAttars: {
            name: '111',
          },
        },
        {
          type: 'input',
          model: 'test', //字段名
          label: '名称', // 字段文本说明,
          componentAttrs: {
            // input
          },
          formItemAttars: {
            name: '111',
          },
        },
        {
          type: 'input',
          model: 'test', //字段名
          label: '名称', // 字段文本说明,
          componentAttrs: {},
          formItemAttars: {
            name: '111',
          },
        },
        {
          type: 'input',
          model: 'test', //字段名
          label: '日出大苏打得', // 字段文本说明,
          componentAttrs: {
            // input
          },
          formItemAttars: {
            name: '111',
          },
        },
      ],
    },
    {
      type: 'input',
      model: 'test', //字段名
      label: '名称', // 字段文本说明,
      componentAttrs: {
        // input
      },
      formItemAttars: {
        name: '111',
      },
    },
  ],
};

const FilterBar = () => {
  const [formItemLayout, setFormItemLayout] = useState<any>(null);

  useEffect(() => {
    computerLayout();
  }, []);

  const renderFilter = (
    filter: IFiltersType | IFilterGroup,
    i: number
  ): ReactNode => {
    if (!filter) return null;
    if (filter.group) {
      return renderFilerGroup(filter as IFilterGroup, i);
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

  const renderFormItem = (filter: IFiltersType, i: number): ReactNode => {
    if (!(filter && isPlainObject(filter))) return null;
    if (filter.type === 'input') {
      return (
        <Col key={i} style={{ padding: '8px 0px' }}>
          <FieldInput data={filter} />
        </Col>
      );
    }

    return null;
  };

  const computerLayout = () => {
    const itemsPerRow = filterBar.itemsPerRow || 4;
    const colSpan = Math.floor(24 / itemsPerRow);
    console.log(colSpan, 'colSpan');
    const labelCol = { span: colSpan + 3 };
    const wrapperCol = { span: 24 - colSpan - 4 };
    const formItemLayout = {
      labelCol: {
        xs: labelCol,
        sm: labelCol,
        md: labelCol,
        lg: labelCol,
      },
      wrapperCol: {
        xs: wrapperCol,
        sm: wrapperCol,
        md: wrapperCol,
        lg: wrapperCol,
      },
    };
    setFormItemLayout(formItemLayout);
  };

  const {
    searchButton = true,
    resetButton = true,
    renderButton = null,
    formAttars = {},
    filters = [],
  } = filterBar;
  const showBtn = searchButton || resetButton || renderButton;
  return (
    <Form
      className='tf-filterbar'
      layout='inline'
      {...formItemLayout}
      {...formAttars}
    >
      <Row>{filters.length && filters.map(renderFilter)}</Row>
      <Row>
        {showBtn && (
          <FilterbarButtons
            searchButton={searchButton}
            resetButton={resetButton}
            renderButton={renderButton}
          />
        )}
      </Row>
    </Form>
  );
};

export default FilterBar;
