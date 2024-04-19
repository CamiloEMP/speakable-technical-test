export interface CanvasLmsApi {
  get<T>(
    path: string,
    args: {
      accessToken: string
      params?: RequestInit
    }
  ): Promise<T>
  post<T>(path: string, body: any): Promise<T>
  put<T>(path: string, body: any): Promise<T>
  delete<T>(path: string): Promise<T>
}
