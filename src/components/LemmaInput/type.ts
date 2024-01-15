export type ILemma = {
  lemmaTitle: string
  lemmaId: string | number
  lemmaDesc?: string
}

export type ILemmaInfo = { lemmaInfo?: ILemma[] }
export type LemmaTagProps = ILemma & ILemmaInfo
