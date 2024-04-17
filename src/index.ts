import { createApp } from "./app"
import { CourseModel } from "./models/canvas-lms/courses.model"

createApp({ courseModel: new CourseModel() })
