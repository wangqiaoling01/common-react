import isVoid from './isVoid'

const cleanObject = (object: any) => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]

    if (isVoid(value)) {
      delete result[key]
    }
  })

  return result
}

export default cleanObject
