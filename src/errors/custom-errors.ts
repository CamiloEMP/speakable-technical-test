const createCustomError = function (name: string, defaultMessage?: string) {
  return class CustomError extends Error {
    constructor(message?: string) {
      super(defaultMessage ?? message)
      this.name = name
    }
  }
}

export const FirebaseError = createCustomError(
  "FirebaseError",
  "An error occurred with Firebase"
)

export const BadRequestError = createCustomError(
  "BadRequestError",
  "The request is invalid"
)

export const CanvasLmsApiError = createCustomError(
  "CanvasLmsApiError",
  "An error occurred with the Canvas LMS API"
)
