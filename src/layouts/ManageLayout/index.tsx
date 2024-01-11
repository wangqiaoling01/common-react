import React, { FC } from 'react'
import styles from './index.module.scss'
import { Outlet } from 'react-router-dom'

const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}

export default ManageLayout
