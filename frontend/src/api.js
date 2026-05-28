const DEFAULT_BACKEND_URL = '/_/backend'

const backendBaseUrl = (
  import.meta.env.VITE_BACKEND_URL || DEFAULT_BACKEND_URL
).replace(/\/$/, '')

export function apiUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${backendBaseUrl}${normalizedPath}`
}
