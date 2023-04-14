/*
 * @Author: suyi
 * @Date: 2023-04-13 11:49:22
 * @LastEditTime: 2023-04-14 17:24:43
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormToolBar\ToolBar.tsx
 */
import React, { ReactNode } from 'react';
import { isPlainObject, isFunction } from 'is-what';
import { IButtonType, IToolType } from './type';
import { Space } from 'antd';
import ToolBarButtons from './ToolBarButtons';
import './index.less';

const ToolBar = (props: { toolBarData: IToolType[] }) => {
  const { toolBarData } = props;

  const renderToolBar = (tool: IToolType): ReactNode => {
    if (!tool) return null;
    if (React.isValidElement(tool)) {
      return tool;
    } else if (isFunction(tool)) {
      return tool() || null;
    } else {
      if (!isPlainObject(tool)) return null;
      return <ToolBarButtons button={tool as IButtonType} />;
    }
  };

  return (
    <Space className='tf_toolbar'>
      {toolBarData.map((tool, i) => {
        return (
          <div key={i} className='tf_toolbar__item'>
            {renderToolBar(tool)}
          </div>
        );
      })}
    </Space>
  );
};

export default ToolBar;
