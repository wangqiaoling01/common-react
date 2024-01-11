import { nanoid } from 'nanoid'

export const getListDataService = (params: any) => {
  return new Promise((resolve, reject) => {
    console.log('mock fetch', params)
    setTimeout(() => {
      resolve([
        {
          id: nanoid(),
          title: `标题-${new Date().valueOf()}`,
        },
      ])
    }, 2000)
  })
}
