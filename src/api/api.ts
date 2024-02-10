export async function fetcher(...args: Parameters<typeof fetch>) {
  const res = await fetch(...args)
  const json = await res.json()

  return json
}
