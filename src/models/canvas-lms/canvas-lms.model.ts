import { fetchCanvasApi } from "@/config/canvas-lms-api.config"
import { CanvasLmsApi as TCanvasLmsApi } from "@/schemas/canvas-lms.schemas"

export class CanvasLmsApi implements TCanvasLmsApi {
  async get<T>(
    path: string,
    {
      accessToken,
      params
    }: {
      accessToken: string
      params?: RequestInit
    }
  ): Promise<T> {
    try {
      const response = await fetchCanvasApi<T>(path, {
        accessToken: accessToken,
        params: params
      })

      return response
    } catch (error) {
      throw error
    }
  }

  async post<T>(path: string, body: any): Promise<T> {
    return {} as T
  }

  async put<T>(path: string, body: any): Promise<T> {
    return {} as T
  }

  async delete<T>(path: string): Promise<T> {
    return {} as T
  }
}

export const canvasLmsApi = new CanvasLmsApi()
