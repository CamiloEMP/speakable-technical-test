import { type SectionGetParams, type Section } from "@/schemas/section.schemas"
import { type CourseModelType } from "@/schemas/courses.schemas"

import { canvasLmsApi } from "./canvas-lms.model"
import { buildPath } from "@/utils/build-path.utils"

export class CourseModel implements CourseModelType {
  async getAllCourses() {
    try {
      const response = await canvasLmsApi.get<any[]>("/courses")

      return response
    } catch (error) {
      throw error
    }
  }

  async getSections(courseId: number, params: SectionGetParams | undefined) {
    try {
      const path = buildPath(`/courses/${courseId}/sections`, {
        ...params
      })

      const response = await canvasLmsApi.get<Section[]>(path)

      return response
    } catch (error) {
      throw error
    }
  }
}
