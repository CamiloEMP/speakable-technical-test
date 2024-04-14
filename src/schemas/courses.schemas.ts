import type { Section, SectionGetParams } from "./section.schemas"

export interface CourseModel {
  getSections(
    courseId: number,
    params: { include?: SectionGetParams[] }
  ): Promise<Section[]>
}
