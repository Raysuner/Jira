import { Table } from 'antd'

import { ProjectList } from 'common/interface'

export default function TableList({ list, users }: ProjectList) {
  return (
    <Table
      rowKey={(project) => project.id}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: '负责人',
          render(_, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  '未知'}
              </span>
            )
          },
        },
      ]}
      dataSource={list}
    />
  )
}
