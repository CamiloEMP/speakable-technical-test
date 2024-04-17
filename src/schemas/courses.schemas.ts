import type { Section, SectionGetParams } from "./section.schemas"

export interface CourseModelType {
  getSections(
    courseId: number,
    params: { include?: SectionGetParams[] }
  ): Promise<Section[]>
}
