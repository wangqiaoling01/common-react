import { Button, Input } from 'antd'
import React, { FC } from 'react'
import styles from './index.module.scss'
import { ILemmaInfo, ILemma } from '../type'
import { PlusOutlined } from '@ant-design/icons'

type LemmaPopupProps = ILemmaInfo

const LemmaPopup: FC<LemmaPopupProps> = (props: LemmaPopupProps) => {
  const { lemmaInfo = [] } = props
  return (
    <div className={styles.container}>
      <Input.Search placeholder="义项筛选" />

      <div className={styles.listWrap}>
        {lemmaInfo.map((item: ILemma) => (
          <div key={item.lemmaId} className={styles.item}>
            {item.lemmaTitle}（{item.lemmaDesc}）
          </div>
        ))}
      </div>

      <Button icon={<PlusOutlined />} className={styles.btn}>
        添加义项
      </Button>
    </div>
  )
}

export default LemmaPopup
