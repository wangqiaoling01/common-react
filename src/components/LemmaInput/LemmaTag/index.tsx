import React, { FC } from 'react'
import styles from './index.module.scss'
import Trigger from 'rc-trigger'
import { CloseOutlined, DownOutlined, ProfileOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import LemmaPopup from '../LemmaPopup'
import { LemmaTagProps } from '../type'
import 'rc-trigger/assets/index.css'

const LemmaTag: FC<LemmaTagProps> = (props: LemmaTagProps) => {
  const { lemmaTitle, lemmaDesc, lemmaInfo = [] } = props
  const onLink = (e: any) => {
    e.stopPropagation()
  }
  const onRemove = (e: any) => {
    e.stopPropagation()
  }
  return (
    <Trigger
      popup={!!lemmaInfo.length && <LemmaPopup lemmaInfo={lemmaInfo} />}
      action={['click']}
      popupAlign={{
        points: ['tc', 'bc'],
      }}
      stretch="width"
    >
      <div className={styles.container}>
        <div className={styles.lemmaInfo}>
          <span className={styles.lemmaTitle}>{lemmaTitle}</span>
          {lemmaDesc && <span className={styles.lemmaDesc}>（{lemmaDesc}）</span>}
        </div>
        {!!lemmaInfo.length && <DownOutlined className={styles.icon} />}
        <ProfileOutlined className={classNames(styles.icon, styles.link)} onClick={onLink} />
        <CloseOutlined className={styles.icon} onClick={onRemove} />
      </div>
    </Trigger>
  )
}

export default LemmaTag
