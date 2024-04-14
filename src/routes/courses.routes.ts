import { CourseModel } from "@/schemas/courses.schemas"

import { Router } from "express"
import { CoursesController } from "@/controllers/courses.controller"

export const createCourseRoutes = ({
  courseModel
}: {
  courseModel: CourseModel
}) => {
  const courseRouter = Router()

  const courseController = new CoursesController({ courseModel })

  courseRouter.get("/:courseId/sections", courseController.getSections)

  return courseRouter
}
