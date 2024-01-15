import React, { FC, useContext } from 'react'
import { LemmaContext } from '..'

const LemmaResult: FC = () => {
  const lemmaStore = useContext(LemmaContext) || {}
  const lemmaResult = lemmaStore?.lemmaResult || []
  return <div>{lemmaResult.length}</div>
}

export default LemmaResult
