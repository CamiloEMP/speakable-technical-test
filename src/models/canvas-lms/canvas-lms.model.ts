import { CanvasLmsApi as TCanvasLmsApi } from "./canvas-lms.model"

export class CanvasLmsApi implements TCanvasLmsApi {
  async get<T>(
    path: string,
    params?: {
      [key: string]: any
    }
  ): Promise<T> {
    return {} as T
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
