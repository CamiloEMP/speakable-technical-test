import type { Section, SectionGetParams } from "./section.schemas"

export interface CourseModelType {
  getAllCourses(accessToken: string): Promise<any[]>
  getSections(params: {
    courseId: number
    params?: SectionGetParams
    accessToken: string
  }): Promise<Section[]>
}
