import { useFetch } from 'usehooks-ts'
import { ApiResponse } from '../types'

export function useEnsDelegates() {
  const { data, error } = useFetch<ApiResponse>(
    'https://votingpower.up.railway.app/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        {
          delegates (first: 1000, orderBy: "ensVotingPower", orderDirection: "desc") {
            id
            ensVotingPower
          }
        }
      `,
      }),
    }
  )

  const isLoading = !data && !error

  return { data: data?.data?.delegates, error, isLoading }
}
