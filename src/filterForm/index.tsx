import { useState, ReactNode } from 'react';
import React from 'react';
import { Form, Input, Button, DatePicker, Select, Row, Col } from 'antd';
import {
  UpOutlined,
  DownOutlined,
  SearchOutlined,
  RedoOutlined,
} from '@ant-design/icons';
import { isPlainObject, isFunction } from 'is-what';

import './index.less';

const { RangePicker } = DatePicker;
export interface IFilters {
  type: 'input' | 'select' | 'rangePicker' | 'datePicker' | 'render';
  name?: string;
  initialValue?: any; // 初始化默认值
  [key: string]: any; // 其他属性为可选属性
}

interface IProps {
  filters: IFilters[];
  defaultNum?: number; // 初始显示多少项
  renderButton?: ReactNode | (() => {}) | null;
  resetHandle?: () => {}; // 重置回调
  onSubmit?: (values: any) => {}; // 搜索回调
}

const FilterForm: React.FC<IProps> = (props: IProps) => {
  const {
    filters,
    defaultNum = 4,
    renderButton,
    resetHandle,
    onSubmit,
  } = props;
  const [showMore, setShowMore] = useState(false);
  const [form] = Form.useForm();

  const handleSearch = (values: any) => {
    onSubmit?.(values);
  };

  const handleReset = () => {
    form.resetFields();
    resetHandle?.();
  };

  const visibleFilters = showMore ? filters : filters.slice(0, defaultNum);
  const remainingFilters = filters.slice(defaultNum);

  const renderFilter = (filter: IFilters) => {
    const colProps = filter.span
      ? { span: filter.span }
      : { sm: 24, md: 12, lg: 6 };
    const { type, name, label, initialValue, ...attrs } = filter;
    switch (filter.type) {
      case 'input':
        return (
          <Col key={name} {...colProps}>
            <Form.Item
              name={name}
              label={label}
              initialValue={filter.initialValue}
            >
              <Input {...attrs} />
            </Form.Item>
          </Col>
        );
      case 'select':
        return (
          <Col key={name} {...colProps}>
            <Form.Item
              name={name}
              label={label}
              initialValue={filter.initialValue}
            >
              <Select {...attrs}></Select>
            </Form.Item>
          </Col>
        );
      case 'rangePicker':
        return (
          <Col key={name} {...colProps}>
            <Form.Item
              name={name}
              label={label}
              initialValue={filter.initialValue}
            >
              <RangePicker style={{ width: '100%' }} {...attrs} />
            </Form.Item>
          </Col>
        );
      case 'datePicker':
        return (
          <Col key={name} {...colProps}>
            <Form.Item
              name={name}
              label={label}
              initialValue={filter.initialValue}
            >
              <DatePicker style={{ width: '100%' }} {...attrs} />
            </Form.Item>
          </Col>
        );
      case 'render':
        return (
          <Col key={name || 'render'} {...colProps}>
            <Form.Item
              name={name}
              label={label}
              initialValue={filter.initialValue}
            >
              {isFunction(filter.render)
                ? filter.render()
                : (isPlainObject(filter.render) && filter.render) || null}
            </Form.Item>
          </Col>
        );
      default:
        return null;
    }
  };

  const renderFold = () => {
    const collapseTab = {
      fold: {
        label: '收起',
        icon: <UpOutlined />,
      },
      unfold: {
        label: '展开',
        icon: <DownOutlined />,
      },
    };
    const { label, icon } = showMore ? collapseTab.fold : collapseTab.unfold;
    return (
      <div onClick={() => setShowMore(!showMore)} className='filter_btn_fold'>
        {icon}
        {label}
      </div>
    );
  };

  const renderBtn = (): ReactNode => {
    if (!renderButton) return null;
    if (isFunction(renderButton)) {
      return renderButton() as ReactNode;
    } else if (isPlainObject(renderButton)) {
      return renderButton as ReactNode;
    }
    return null;
  };

  const SubmitButton = (
    <Form.Item>
      <Button
        icon={<SearchOutlined />}
        type='primary'
        htmlType='submit'
        onClick={handleSearch}
      >
        搜索
      </Button>
    </Form.Item>
  );

  const ResetButton = (
    <Form.Item>
      <Button icon={<RedoOutlined />} onClick={handleReset}>
        重置
      </Button>
    </Form.Item>
  );

  return (
    <Form onFinish={handleSearch} form={form}>
      <Row gutter={[16, 16]}>
        {visibleFilters.map(renderFilter)}
        <Col flex='auto' />
        <Col>
          <Row justify='end' className='filter_btn'>
            {remainingFilters.length > 0 && renderFold()}
            {SubmitButton}
            {ResetButton}
            {renderButton && renderBtn()}
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
