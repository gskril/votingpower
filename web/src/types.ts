export type ApiResponse = {
  data: {
    delegates: {
      id: string
      ensVotingPower: string
    }[]
  }
}
