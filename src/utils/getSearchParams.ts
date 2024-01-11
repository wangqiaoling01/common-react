import isVoid from './isVoid'
import {
  SEARCH_KEY_TITLE,
  SEARCH_KEY_SELECT,
  SEARCH_KEY_NUMBER,
  SEARCH_KEY_SWITCH,
  SEARCH_KEY_SLIDER,
  SEARCH_KEY_RADIO,
  SEARCH_KEY_CHECKBOX,
  SEARCH_KEY_MULTIPLE,
  ARRAY_KEYS,
} from '@/constants/search'

export const getSearchParams = (searchParams: any = {}) => {
  const result: any = {}
  ;[
    SEARCH_KEY_TITLE,
    SEARCH_KEY_SELECT,
    SEARCH_KEY_NUMBER,
    SEARCH_KEY_SWITCH,
    SEARCH_KEY_SLIDER,
    SEARCH_KEY_RADIO,
    SEARCH_KEY_CHECKBOX,
    SEARCH_KEY_MULTIPLE,
  ].forEach(key => {
    let value: any = searchParams.get(key) || ''
    if (isVoid(value)) {
      return
    }
    if (ARRAY_KEYS.includes(key)) {
      value = value.split(',') || []
    }
    result[key] = value
  })
  return result
}
