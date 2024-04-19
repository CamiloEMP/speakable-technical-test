import { type CourseModelType } from "@/schemas/courses.schemas"

import { Router } from "express"

import { CoursesController } from "@/controllers/courses.controller"

export const createCourseRoutes = ({
  courseModel
}: {
  courseModel: CourseModelType
}) => {
  const courseRouter = Router()

  const courseController = new CoursesController({ courseModel })

  courseRouter.get("/", courseController.getAllCourses)
  courseRouter.get("/:courseId/sections", courseController.getSections)

  return courseRouter
}
