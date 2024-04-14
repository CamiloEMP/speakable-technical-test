import { type SectionGetParams, type Section } from "@/schemas/section.schemas"

import type { CourseModel as TCourseModel } from "@/schemas/courses.schemas"
import { canvasLmsApi } from "./canvas-lms.model"

export class CourseModel implements TCourseModel {
  async getSections(
    courseId: number,
    params: { include?: SectionGetParams[] } = {}
  ) {
    console.log({ courseId })

    return canvasLmsApi.get<Section[]>(`/courses/${courseId}/sections`, params)
  }
}

export const courseModel = new CourseModel()
