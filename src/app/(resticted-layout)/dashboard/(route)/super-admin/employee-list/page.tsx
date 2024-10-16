import React from 'react'
import { columns } from '../../../../components/product-table/columns'
import { tasks } from '../../../../components/product-table/data/tasks'
import { EmployeeListDataTable } from '@/app/(resticted-layout)/components/employee-table/employee-list-data-table'





const page = () => {
  return (
    <div>
      <EmployeeListDataTable data={tasks} columns={columns} />
    </div>
  )
}

export default page
