import { NextFunction, Request, Response } from "express"

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  next()
}
