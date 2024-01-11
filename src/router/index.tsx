import React from 'react'

import ManageLayout from '@/layouts/ManageLayout'
import { createBrowserRouter } from 'react-router-dom'
import ManagePage from '@/pages/manage'

const router = createBrowserRouter([
  {
    // 跟路由
    path: '/',
    children: [
      {
        path: '/',
        element: <>home</>,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <ManagePage />,
          },
          //   {
          //     path: 'star',
          //     element: <Star />,
          //   },
          //   {
          //     path: 'trash',
          //     element: <Trash />,
          //   },
        ],
      },

      {
        // 没有命中任何路由 一般写在最后 兜底
        path: '*',
        // element: <NotFound />,
      },
    ],
  },
])
export default router
