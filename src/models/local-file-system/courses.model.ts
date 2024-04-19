import { type SectionGetParams, type Section } from "@/schemas/section.schemas"
import { type CourseModelType } from "@/schemas/courses.schemas"

import { buildPath } from "@/utils/build-path.utils"
import { createUsersFromSectionsCanvasLMS } from "@/lib/firebase/services/create-users-from-sections-canvas-lms.service"
import { createSectionCanvasLMS } from "@/lib/firebase/services/create-section-canvas-lms.service"

import sections_mock from "@/mocks/section.mock.json"

export class CourseModel implements CourseModelType {
  async getAllCourses(accessToken: string) {
    try {
      return []
    } catch (error) {
      throw error
    }
  }

  async getSections({
    accessToken,
    courseId,
    params
  }: {
    courseId: number
    params: SectionGetParams | undefined
    accessToken: string
  }) {
    try {
      const path = buildPath(`/courses/${courseId}/sections`, {
        ...params
      })

      let sections: Section[] = []

      // Simulate params

      if (params?.include !== "students") {
        sections = sections_mock.map((section) => {
          const { students: _, ...rest } = section
          return rest
        })
      } else {
        sections = sections_mock
      }

      // await createSectionCanvasLMS(sections)
      // await createUsersFromSectionsCanvasLMS(sections)

      return sections
    } catch (error) {
      throw error
    }
  }
}
