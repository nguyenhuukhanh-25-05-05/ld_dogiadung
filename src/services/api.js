/**
 * @type {string}
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

/** @param {string} endpoint * @param {Object} [options={}] */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`[API] ${endpoint} failed:`, error)
    throw error
  }
}


export const api = {
  get: (endpoint) => request(endpoint, { method: 'GET' }),
  post: (endpoint, data) => request(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  put: (endpoint, data) => request(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (endpoint) => request(endpoint, { method: 'DELETE' }),
}
