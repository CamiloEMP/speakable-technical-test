import { createApp } from "./app"
import { courseModel } from "./models/canvas-lms/courses.model"

const app = createApp({
  courseModel: courseModel
})
