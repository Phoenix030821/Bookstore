import React, { useContext, useState, useEffect, useRef }  from 'react';
import { Table, Input, Button, Space, Form, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import {Link, withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
const EditableContext = React.createContext(null);
const data = [
    {
        key: '1',
        name: '三体',
        details: <Link to="/bookpage/java">详情</Link>,
        author: '刘慈欣',
        price: 25.1,
    },
    {
        key: '2',
        name: '红楼梦',
        details: <Link to="/bookpage/java">详情</Link>,
        author: '曹雪芹',
        price: 43.2,
    },
    {
        key: '3',
        name:'北京折叠',
        details: <Link to="/bookpage/java">详情</Link>,
        author: '郝景芳',
        price: 22.0,
    },
    {
        key: '4',
        name: '舞！舞！舞！',
        details: <Link to="/bookpage/java">详情</Link>,
        author: '村上春树',
        price: 39.9,
    },
    {
        key: '5',
        name: '深入理解计算机系统',
        details: <Link to="/bookpage/csapp">详情</Link>,
        author: '兰德尔·E·布莱恩特',
        price: 105.5,
    },
    {
        key: '6',
        name: '白夜行',
        details: <Link to="/bookpage/java">详情</Link>,
        author: '东野圭吾',
        price: 42.1,
    },
    {
        key: '7',
        name: '机器学习',
        details: <Link to="/bookpage/java">详情</Link>,
        author: '周志华',
        price: 54.8,
    },
    {
        key: '8',
        name: '5年高考 3年模拟',
        details: <Link to="/bookpage/53">详情</Link>,
        author: '5·3名师课题组',
        price: 45.1,
    },
    {
        key: '9',
        name: 'Java核心技术卷II',
        details: <Link to="/bookpage/java">详情</Link>,
        author: '凯S.霍斯特曼',
        price: 35.1,
    }
];

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
                          title,
                          editable,
                          children,
                          dataIndex,
                          record,
                          handleSave,
                          ...restProps
                      }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title}不能为空`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

class BookChart extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '图书',
                dataIndex: 'name',
                key: 'name',
                width: '30%',
                editable: true,
                ...this.getColumnSearchProps('name'),
            },
            {
                title: '详情',
                dataIndex: 'details',
                key: 'details',
                width: '20%',
            },
            {
                title: '作者',
                dataIndex: 'author',
                key: 'author',
                width: '30%',
                editable: true,
                ...this.getColumnSearchProps('author'),
            },
            {
                title: '定价(¥)',
                dataIndex: 'price',
                key: 'price',
                editable: true,
                ...this.getColumnSearchProps('price'),
                sorter: (a, b) => {
                    return a.price - b.price;
                },
                sortDirections: ['descend', 'ascend'],
            },
        ];

        this.state = {
            dataSource: [
                {
                    key: '1',
                    name: '三体',
                    details: <Link to="/bookpage/java">详情</Link>,
                    author: '刘慈欣',
                    price: 25.1,
                },
                {
                    key: '2',
                    name: '红楼梦',
                    details: <Link to="/bookpage/java">详情</Link>,
                    author: '曹雪芹',
                    price: 43.2,
                },
                {
                    key: '3',
                    name: '北京折叠',
                    details: <Link to="/bookpage/java">详情</Link>,
                    author: '郝景芳',
                    price: 22.0,
                },
                {
                    key: '4',
                    name: '舞！舞！舞！',
                    details: <Link to="/bookpage/java">详情</Link>,
                    author: '村上春树',
                    price: 39.9,
                },
                {
                    key: '5',
                    name: '深入理解计算机系统',
                    details: <Link to="/bookpage/csapp">详情</Link>,
                    author: '兰德尔·E·布莱恩特',
                    price: 105.5,
                },
                {
                    key: '6',
                    name: '白夜行',
                    details: <Link to="/bookpage/java">详情</Link>,
                    author: '东野圭吾',
                    price: 42.1,
                },
                {
                    key: '7',
                    name: '机器学习',
                    details: <Link to="/bookpage/java">详情</Link>,
                    author: '周志华',
                    price: 54.8,
                },
                {
                    key: '8',
                    name: '5年高考 3年模拟',
                    details: <Link to="/bookpage/53">详情</Link>,
                    author: '5·3名师课题组',
                    price: 45.1,
                },
                {
                    key: '9',
                    name: 'Java核心技术卷II',
                    details: <Link to="/bookpage/java">详情</Link>,
                    author: '凯S.霍斯特曼',
                    price: 35.1,
                },
            ],
        }
    }
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter((item) => item.key !== key),
        });
    };
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: '新建图书',
            details: <Link to="/bookpage/java">详情</Link>,
            author: '作者',
            price: 0,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };
    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData,
        });
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Button
                    onClick={this.handleAdd}
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                >
                    添加图书
                </Button>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}

export default withRouter(BookChart);

