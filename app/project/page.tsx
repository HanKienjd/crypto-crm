import { Table } from 'antd'
import React from 'react'
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

function ProjectListPage() {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]
  const columns: TableProps<DataType>['columns'] = [
  ]
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default ProjectListPage