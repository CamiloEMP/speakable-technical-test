import { BadRequestError } from "@/errors/custom-errors"
import { handleResponseError } from "@/errors/handle-response-error"
import { CourseModelType } from "@/schemas/courses.schemas"
import { SectionGetParams } from "@/schemas/section.schemas"

import { Request, Response } from "express"

export class CoursesController {
  courseModel: CourseModelType

  constructor({ courseModel }: { courseModel: CourseModelType }) {
    this.courseModel = courseModel
  }

  getAllCourses = async (req: Request, res: Response) => {
    const accessToken = (req.user as { accessToken?: string })?.accessToken

    try {
      const courses = await this.courseModel.getAllCourses(accessToken || "")

      res.json(courses)
    } catch (error) {
      const customError = handleResponseError(error)

      res.status(customError.status).json({ error: customError.message })
    }
  }

  getSections = async (req: Request, res: Response) => {
    const courseId = req.params.courseId
    const params = req.query
    const accessToken = (req.user as { accessToken?: string })?.accessToken

    if (!courseId) {
      throw new BadRequestError("Missing courseId")
    }

    if (isNaN(+courseId)) {
      throw new BadRequestError("Missing courseId")
    }

    let sectionParams = undefined

    // This should be validated as well
    if (Object.keys(params).length > 0) {
      sectionParams = params as unknown as SectionGetParams
    }

    try {
      const sections = await this.courseModel.getSections({
        courseId: +courseId,
        params: sectionParams,
        accessToken: accessToken || ""
      })

      res.json(sections)
    } catch (error) {
      const customError = handleResponseError(error)

      res.status(customError.status).json({ error: customError.message })
    }
  }
}
