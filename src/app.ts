import { CourseModel } from "./schemas/courses.schemas"

import express from "express"
import { createCourseRoutes } from "./routes/courses.routes"

export const createApp = ({ courseModel }: { courseModel: CourseModel }) => {
  const app = express()

  app.use("/courses", createCourseRoutes({ courseModel }))

  const port = process.env.PORT ?? 3000

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
  })
}
