import type { Section, SectionGetParams } from "./section.schemas"

export interface CourseModelType {
  getSections(courseId: number, params?: SectionGetParams): Promise<Section[]>
  getAllCourses(): Promise<any[]>
}
