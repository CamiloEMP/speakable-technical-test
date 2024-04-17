import { CourseModelType } from "@/schemas/courses.schemas"

import { Request, Response } from "express"

export class CoursesController {
  courseModel: CourseModelType

  constructor({ courseModel }: { courseModel: CourseModelType }) {
    this.courseModel = courseModel
  }

  getSections = async (req: Request, res: Response) => {
    const courseId = req.params.courseId
    const params = req.query

    if (!courseId) {
      return res.status(400).json({ error: "Missing courseId" })
    }

    if (isNaN(+courseId)) {
      return res.status(400).json({ error: "Invalid courseId" })
    }

    try {
      const sections = await this.courseModel.getSections(+courseId, params)

      res.json(sections)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message })
      }

      res.status(500).json({ error: "An unknown error occurred" })
    }
  }
}
