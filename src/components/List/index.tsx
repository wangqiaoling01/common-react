import { Pagination, Table } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import {
  LIST_PAGE,
  LIST_PAGE_SIZE,
  SEARCH_KEY_PAGE,
  SEARCH_KEY_PAGE_SIZE,
} from '@/constants/search'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

interface ListProps {
  columns: any
  dataSource: any
  pageSize?: number
  total: number
  loading?: boolean
}

const List: FC<ListProps> = (props: ListProps) => {
  const { columns, dataSource, total, loading } = props
  const [current, setCurrent] = useState(1)
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE)
  const [searchParam] = useSearchParams()
  const nav = useNavigate()
  const { pathname } = useLocation()

  const onPaginationChange = (page: number, pageSize: number) => {
    searchParam.set(SEARCH_KEY_PAGE, page.toString())
    searchParam.set(SEARCH_KEY_PAGE_SIZE, pageSize.toString())
    nav({
      pathname,
      search: searchParam.toString(),
    })
  }

  useEffect(() => {
    const page = parseInt(searchParam.get(SEARCH_KEY_PAGE) || '', 10) || LIST_PAGE
    const pageSize = parseInt(searchParam.get(SEARCH_KEY_PAGE_SIZE) || '', 10) || LIST_PAGE_SIZE
    setCurrent(page)
    setPageSize(pageSize)
  }, [searchParam])

  return (
    <div>
      <Table
        columns={columns}
        pagination={false}
        dataSource={dataSource}
        rowKey={'id'}
        loading={loading}
      />
      <Pagination
        pageSize={pageSize}
        current={current}
        total={total}
        disabled={loading}
        onChange={onPaginationChange}
      />
    </div>
  )
}
List.defaultProps = {
  pageSize: 10,
  dataSource: [],
  columns: [],
  loading: false,
}
export default List
