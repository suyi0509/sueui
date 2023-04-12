/*
 * @Author: suyi
 * @Date: 2023-04-12 17:56:55
 * @LastEditTime: 2023-04-12 18:58:44
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\TableForm\components\TableFormHeader\TableFormHeader.tsx
 */
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';

import './TableFormHeader.less'

export interface ValidedNavItem {
  title: string;
  key: any;
}

export interface ITableFormHeader {
  headerTitle?: String;
  headerNav?: Array<ValidedNavItem>;
}



const TableFormHeader = (props: ITableFormHeader) => {
  const { headerTitle, headerNav } = props;

  return (
    <div className='tf-header'>
      {headerTitle && <h1 className='tf-header__title'>{headerTitle}</h1>}
      {headerNav?.length && <Breadcrumb className='tf-header__breadcrumb' items={headerNav} />}
    </div>
  );
};

export default TableFormHeader;
