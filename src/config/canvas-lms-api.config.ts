import { CanvasLmsApiError } from "@/errors/custom-errors"

export const CANVAS_LMS_API_CONFIG = {
  baseUrl: process.env.CANVAS_LMS_API_BASE_URL || "",
  accessToken: process.env.CANVAS_LMS_API_ACCESS_TOKEN || "",
  clientId: process.env.CANVAS_LMS_CLIENT_ID || "",
  clientSecret: process.env.CANVAS_LMS_CLIENT_SECRET || ""
}

export const CANVAS_FETCH_PARAMS = {
  headers: {
    Authorization: `Bearer ${CANVAS_LMS_API_CONFIG.accessToken}`,
    "Content-Type": "application/json"
  }
}

export const fetchCanvasApi = async (path: string, params?: RequestInit) => {
  const url = `${CANVAS_LMS_API_CONFIG.baseUrl}${path}`

  try {
    const response = await fetch(url, {
      ...CANVAS_FETCH_PARAMS,
      ...params
    })

    if (!response.ok) {
      throw new CanvasLmsApiError(response.statusText)
    }

    return response.json()
  } catch (error) {
    throw error
  }
}
