import React, { ReactNode } from 'react';
import { isPlainObject, isFunction } from 'is-what';
import { Space, Form, Button, ButtonProps, Col } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { IFilterBtnsType } from './type';
import './index.less';

const FilterbarButtons = (props: IFilterBtnsType) => {
  const { searchButton = true, resetButton = true, renderButton } = props;
  const isFold = true;

  const renderBtn = (): ReactNode => {
    if (!renderButton) return null;
    if (isFunction(renderButton)) {
      return renderButton();
    } else if (isPlainObject(renderButton)) {
      return renderButton;
    }
  };

  const handleOriginalReset = () => {
    // 重置
  };

  return (
    <Space className='tf-filterbar__btn'>
      {searchButton && (
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            {...(isPlainObject(searchButton) && searchButton.attrs)}
            onClick={
              isPlainObject(searchButton)
                ? searchButton?.onClick || searchButton.attrs?.onClick
                : () => {}
            }
          >
            {isPlainObject(searchButton) ? searchButton.text : '搜索'}
          </Button>
        </Form.Item>
      )}
      {resetButton && (
        <Form.Item>
          <Button
            type='primary'
            {...(isPlainObject(resetButton) && resetButton.attrs)}
            onClick={
              isPlainObject(resetButton)
                ? resetButton?.onClick || resetButton.attrs?.onClick
                : handleOriginalReset
            }
          >
            {isPlainObject(resetButton) ? resetButton.text : '重置'}
          </Button>
        </Form.Item>
      )}
      {renderButton && <Form.Item>{renderBtn()}</Form.Item>}
      <Form.Item>
        <Button type='link'>
          展开 {isFold ? <DownOutlined /> : <UpOutlined />}
        </Button>
      </Form.Item>
    </Space>
  );
};

export default FilterbarButtons;
