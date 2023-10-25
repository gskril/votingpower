export function formatTokens(count: string | number) {
  const formatter = new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  })

  return formatter.format(Number(count) / 1e18)
}
