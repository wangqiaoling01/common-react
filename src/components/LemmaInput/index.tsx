import React, { FC, useState } from 'react'
import styles from './index.module.scss'
import { LEVEL_MAP, DEFAULT_LEVEL } from './constant'
import { Input, Menu } from 'antd'
import LemmaResult from './LemmaResult'
import LemmaTag from './LemmaTag'
import mock from 'mockjs'
import { createContext } from 'react'
import { ChangeEvent } from 'react'
import { ILemma } from './type'
const Random = mock.Random
interface LemmaInputProps {
  level?: string
}
type ILemmaContext = {
  lemma?: ILemma[]
  setLemma?: (params: ILemma[]) => void
  lemmaResult?: ILemma[]
  setLemmaResult?: (params: ILemma[]) => void
}

export const LemmaContext = createContext<any>({})

const LemmaInput: FC<LemmaInputProps> = (props: LemmaInputProps) => {
  const { level = DEFAULT_LEVEL } = props

  const [lemmaTextarea, setLemmaTextarea] = useState<string>()

  const [lemmaResult, setLemmaResult] = useState<ILemma[]>([])

  //   已经添加的
  const [lemma, setLemma] = useState([
    { lemmaTitle: Random.ctitle(), lemmaId: Random.id(), lemmaDesc: Random.ctitle() },
    { lemmaTitle: Random.ctitle(), lemmaId: Random.id(), lemmaDesc: Random.ctitle() },
    { lemmaTitle: Random.ctitle(), lemmaId: Random.id(), lemmaDesc: Random.ctitle() },
    { lemmaTitle: Random.ctitle(), lemmaId: Random.id(), lemmaDesc: Random.ctitle() },
    {
      lemmaTitle: Random.ctitle(),
      lemmaId: Random.id(),
      lemmaDesc: Random.ctitle(),
      lemmaInfo: [
        { lemmaTitle: Random.ctitle(), lemmaId: Random.id(), lemmaDesc: Random.ctitle() },
        { lemmaTitle: Random.ctitle(), lemmaId: Random.id(), lemmaDesc: Random.ctitle() },
        { lemmaTitle: Random.ctitle(), lemmaId: Random.id(), lemmaDesc: Random.ctitle() },
        { lemmaTitle: Random.ctitle(), lemmaId: Random.id(), lemmaDesc: Random.ctitle() },
      ],
    },
  ])

  const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.keyCode === 13 && console.log('enter', lemmaTextarea)
  }

  const store = { lemma, setLemma, lemmaResult, setLemmaResult }

  return (
    <LemmaContext.Provider value={store}>
      <div className={styles.container}>
        <div className={styles.menuWrap}>
          <Menu
            onClick={() => {
              //
            }}
            selectedKeys={[level]}
            mode="horizontal"
            items={LEVEL_MAP}
            style={{ border: 'none' }}
          />
        </div>
        <div className={styles.lemmaWrap}>
          <div className={styles.inputWrap}>
            <div className={styles.addedLemma}>
              {lemma.map(item => (
                <LemmaTag key={item.lemmaId} {...item} />
              ))}
            </div>

            <Input.TextArea
              placeholder="请在此输入..."
              bordered={false}
              value={lemmaTextarea}
              className={styles.textarea}
              onKeyUp={onKeyUp}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setLemmaTextarea(e.target.value)}
            />
          </div>

          <div className={styles.lemmaResultWrap}>
            <LemmaResult />
          </div>
        </div>
      </div>
    </LemmaContext.Provider>
  )
}
LemmaInput.defaultProps = {
  level: DEFAULT_LEVEL,
}
export default LemmaInput
