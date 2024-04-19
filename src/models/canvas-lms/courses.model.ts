import { type SectionGetParams, type Section } from "@/schemas/section.schemas"
import { type CourseModelType } from "@/schemas/courses.schemas"

import { canvasLmsApi } from "./canvas-lms.model"
import { buildPath } from "@/utils/build-path.utils"
import { createUsersFromSectionsCanvasLMS } from "@/lib/firebase/services/create-users-from-sections-canvas-lms.service"
import { createSectionCanvasLMS } from "@/lib/firebase/services/create-section-canvas-lms.service"

export class CourseModel implements CourseModelType {
  // This method is only to test the integration with Canvas LMS API
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

      const response = await canvasLmsApi.get<{ data: Section[] }>(path)

      const sections = response.data ?? []

      await createSectionCanvasLMS(sections)
      await createUsersFromSectionsCanvasLMS(sections)

      return sections
    } catch (error) {
      throw error
    }
  }
}
