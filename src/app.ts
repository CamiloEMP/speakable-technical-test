import express from "express"
import { createCourseRoutes } from "./routes/courses.routes"
import { CourseModelType } from "./schemas/courses.schemas"

export const createApp = ({
  courseModel
}: {
  courseModel: CourseModelType
}) => {
  const app = express()

  app.use("/courses", createCourseRoutes({ courseModel }))

  const port = process.env.PORT ?? 3000

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
  })
}
