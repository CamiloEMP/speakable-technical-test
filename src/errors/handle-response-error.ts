import {
  BadRequestError,
  CanvasLmsApiError,
  FirebaseError
} from "./custom-errors"

export function handleResponseError(err: unknown, errorUnknown?: string) {
  if (err instanceof FirebaseError) {
    return {
      status: 500,
      message: err.message
    }
  }

  if (err instanceof BadRequestError) {
    return {
      status: 400,
      message: err.message
    }
  }

  if (err instanceof CanvasLmsApiError) {
    return {
      status: 500,
      message: err.message
    }
  }

  return {
    status: 500,
    message: errorUnknown || "Internal server error"
  }
}
