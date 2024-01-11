import React, { FC } from 'react'
import styles from './index.module.scss'
import Search from '@/components/Search'
import List from '@/components/List'
import useLoadListData from '@/hook/useLoadListData'

const ManagePage: FC = () => {
  const columns = [
    { title: '标题', key: 'title' },
    { title: 'id', key: 'id' },
  ].map(item => ({ ...item, dataIndex: item.key }))

  const { data, loading, refresh } = useLoadListData()
  return (
    <div className={styles.container}>
      <Search onSearch={refresh} />
      <List columns={columns} dataSource={data} total={100} loading={loading} />
    </div>
  )
}

export default ManagePage
