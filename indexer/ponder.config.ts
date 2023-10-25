import type { Config } from '@ponder/core'
import { http } from 'viem'

export const config: Config = {
  networks: [
    {
      name: 'mainnet',
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
      maxRpcRequestConcurrency: 5,
    },
  ],
  contracts: [
    {
      name: 'ENSToken',
      network: 'mainnet',
      abi: './abis/ENSToken.json',
      address: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
      startBlock: 13533418,
    },
  ],
}
