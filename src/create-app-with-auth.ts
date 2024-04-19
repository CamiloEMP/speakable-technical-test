import express from "express"
import "dotenv/config"
import passport from "passport"
import OAuth2Strategy from "passport-oauth2"

import { CANVAS_LMS_API_CONFIG } from "@/config/canvas-lms-api.config"
import { createCourseRoutes } from "./routes/courses.routes"
import { CourseModelType } from "./schemas/courses.schemas"
import { ensureAuthenticated } from "./middlewares/auth.middleware"

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: "https://canvas.instructure.com/login/oauth2/auth",
      tokenURL: "https://canvas.instructure.com/login/oauth2/token",
      clientID: CANVAS_LMS_API_CONFIG.clientId,
      clientSecret: CANVAS_LMS_API_CONFIG.clientSecret,
      callbackURL: "http://localhost:3000/auth/canvas/callback"
    },
    function (accessToken: string, _: string, a: string, done: Function) {
      const user = { accessToken }

      return done(null, user)
    }
  )
)

passport.serializeUser(function (user: any, done) {
  done(null, user)
})

passport.deserializeUser(function (obj: any, done) {
  done(null, obj)
})

export const createAppWithAuth = ({
  courseModel
}: {
  courseModel: CourseModelType
}) => {
  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(passport.initialize())

  app.get("/auth/canvas", passport.authenticate("oauth2"))

  app.get(
    "/auth/canvas/callback",
    passport.authenticate("oauth2", { failureRedirect: "/login" }),
    function (_, res) {
      res.redirect("/")
    }
  )

  app.use("/courses", ensureAuthenticated)
  app.use("/courses", createCourseRoutes({ courseModel }))

  const port = process.env.PORT ?? 3000

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
  })
}
