import { type SectionGetParams, type Section } from "@/schemas/section.schemas"
import { type CourseModelType } from "@/schemas/courses.schemas"

import { canvasLmsApi } from "./canvas-lms.model"

export class CourseModel implements CourseModelType {
  async getSections(
    courseId: number,
    params: { include?: SectionGetParams[] } = {}
  ) {
    try {
      const response = await canvasLmsApi.get<Section[]>(
        `/courses/${courseId}/sections`,
        { params }
      )
      return response
    } catch (error) {
      throw error
    }
  }
}
