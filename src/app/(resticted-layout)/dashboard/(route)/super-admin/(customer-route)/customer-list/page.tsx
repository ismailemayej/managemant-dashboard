import React from 'react'
import { columns } from '../../../../../components/product-table/columns'
import { tasks } from '../../../../../components/product-table/data/tasks'
import { CustomerListDataTable } from '@/app/(resticted-layout)/components/customer-table/customer-list-data-table'





const page = () => {
  return (
    <div>
      <CustomerListDataTable data={tasks} columns={columns} />
    </div>
  )
}

export default page
