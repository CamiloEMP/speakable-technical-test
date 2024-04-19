import { createAppWithAuth } from "./create-app-with-auth"
import { CourseModel } from "./models/canvas-lms/courses.model"

createAppWithAuth({ courseModel: new CourseModel() })
