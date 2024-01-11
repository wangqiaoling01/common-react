import {
  LIST_PAGE,
  LIST_PAGE_SIZE,
  SEARCH_KEY_PAGE,
  SEARCH_KEY_PAGE_SIZE,
} from '@/constants/search'
import { getListDataService } from '@/services/getListDataService'
import { getSearchParams } from '@/utils/getSearchParams'
import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'

const useLoadListData = () => {
  const [searchParams] = useSearchParams()

  const { data, loading, refresh, error } = useRequest(
    async () => {
      const params = getSearchParams(searchParams)
      const page = parseInt(searchParams.get(SEARCH_KEY_PAGE) || '', 10) || LIST_PAGE
      const pageSize = parseInt(searchParams.get(SEARCH_KEY_PAGE_SIZE) || '', 10) || LIST_PAGE_SIZE
      return await getListDataService({ ...params, page, pageSize })
    },
    {
      refreshDeps: [searchParams],
    }
  )

  return { data, loading, refresh, error }
}

export default useLoadListData
