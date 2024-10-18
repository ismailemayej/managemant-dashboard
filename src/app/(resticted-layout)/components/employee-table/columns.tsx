"use client"
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from './data-table-column-header'; 
import { DataTableRowActions } from './data-table-row-actions'; 
import { Task } from '../product-table/data/schema'; 

export const columns: ColumnDef<Task>[] = [
  {
    id: 'serial',
    header: 'S/N',
    cell: ({ row }) => <div>{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => {
     

      return (
        <div className='flex space-x-2'>
          
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('title')}
          </span>
        </div>
      )
    },
  },
 
  {
    accessorKey: 'mobile',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Phone Number' />
    ),
    cell: ({ row }) => {
     

      return (
        <div className='flex space-x-2'>
          
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('title')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Address' />
    ),
    cell: ({ row }) => {
     

      return (
        <div className='flex space-x-2'>
          
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('title')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'purchase',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Number of Purchase' />
    ),
    cell: ({ row }) => {
     

      return (
        <div className='flex space-x-2'>
          
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('title')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'reqularireqular',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Regular/Irregular' />
    ),
    cell: ({ row }) => {
     

      return (
        <div className='flex space-x-2'>
          
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('title')}
          </span>
        </div>
      )
    },
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
