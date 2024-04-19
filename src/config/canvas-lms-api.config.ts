import { CanvasLmsApiError } from "@/errors/custom-errors"

export const CANVAS_LMS_API_CONFIG = {
  baseUrl: process.env.CANVAS_LMS_API_BASE_URL || "",
  clientId: process.env.CANVAS_LMS_CLIENT_ID || "",
  clientSecret: process.env.CANVAS_LMS_CLIENT_SECRET || ""
}

export const canvasFecthParams = (accessToken: string) => ({
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json"
  }
})

export const fetchCanvasApi = async <T>(
  path: string,
  {
    accessToken,
    params
  }: {
    accessToken: string
    params?: RequestInit
  }
) => {
  const url = `${CANVAS_LMS_API_CONFIG.baseUrl}${path}`

  try {
    const response = await fetch(url, {
      ...params,
      ...canvasFecthParams(accessToken)
    })

    if (!response.ok) {
      throw new CanvasLmsApiError(response.statusText)
    }

    return response.json() as T
  } catch (error) {
    throw error
  }
}
