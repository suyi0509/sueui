---
title: FilterForm
nav:
  title: 组件
  order: 1
group:
  title: 组件总览
  order: 2
---

# FilterForm 表单搜索


## 代码演示

### 基本用法

<code src="../../demo/FilterForm/index.tsx" description="基于antd封装FilterForm基础表单搜索"></code>


#### IProps
| 参数名       | 是否必传 | 类型                            | 默认值 | 说明           |
| ------------ | -------- | ------------------------------- | ------ | -------------- |
| filters      | 是       | IFilters[]                      | -      | 过滤条件列表   |
| defaultNum   | -        | number                          | 4      | 初始显示多少项 |
| renderButton | -        | ReactNode \| (() => {}) \| null | -      | 自定义渲染按钮 |
| resetHandle  | -        | () => {}                        | -      | 重置回调       |
| onSubmit     | -        | (values: any) => {}             | -      | 搜索回调       |

#### IFilters

| 参数名       | 是否必传 | 类型                                                                | 默认值 | 说明               |
| ------------ | -------- | ------------------------------------------------------------------- | ------ | ------------------ |
| type         | 是       | 'input' \| 'select'     \| 'rangePicker'\| 'datePicker' \| 'render' | -      | 条件类型           |
| name         | -        | string                                                              | -      | 条件名称           |
| initialValue | -        | any                                                                 | -      | 初始默认值         |
| ...          | ...      | any                                                                 | -      | 其他项antd可选属性 |
