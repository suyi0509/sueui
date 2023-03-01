"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: suyi
 * @Date: 2023-03-01 11:26:48
 * @LastEditTime: 2023-03-01 11:36:02
 * @LastEditors: suyi
 * @Description: 如果代码不是为了制造bug，那将毫无意义
 * @FilePath: \test-uui\src\AmTable\index.tsx
 */
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => react_1.default.createElement("a", null, text),
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (react_1.default.createElement(react_1.default.Fragment, null, tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (react_1.default.createElement(antd_1.Tag, { color: color, key: tag }, tag.toUpperCase()));
        }))),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (react_1.default.createElement(antd_1.Space, { size: "middle" },
            react_1.default.createElement("a", null,
                "Invite ",
                record.name),
            react_1.default.createElement("a", null, "Delete"))),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const App = () => react_1.default.createElement(antd_1.Table, { columns: columns, dataSource: data });
exports.default = App;
