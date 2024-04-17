export function buildPath(
  basePath: string,
  params?: { [key: string]: string | number | boolean }
): string {
  let path = basePath

  if (!params) {
    return path
  }

  const queryParams = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value.toString())}`)
    .join("&")

  if (queryParams) {
    path += `?${queryParams}`
  }

  return path
}
