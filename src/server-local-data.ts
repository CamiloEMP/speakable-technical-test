import { createAppWithoutAuth } from "./create-app-without-auth"
import { CourseModel } from "./models/local-file-system/courses.model"

createAppWithoutAuth({ courseModel: new CourseModel() })
