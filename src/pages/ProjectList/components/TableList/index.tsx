import dayjs from 'dayjs'
import { Table } from 'antd'

import { ProjectList } from 'common/interface'

export default function TableList({ userList, ...props }: ProjectList) {
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
          title: '部门',
          dataIndex: 'organization'
        },
        {
          title: '负责人',
          render(_, project) {
            return (
              <span>
                {userList.find((user) => user.id === project.personId)?.name ||
                  '未知'}
              </span>
            )
          },
        },
        {
          title: '创建时间',
          render(_, project) {
            return (
              <span>
                {
                  project.created ? dayjs(project.created).format('YYYY-MM-DD') : '未知'
                }
              </span>
            )
          }
        }
      ]}
      {...props}
    />
  )
}
