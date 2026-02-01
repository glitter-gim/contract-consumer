import { v1 } from "@platform/shared-public"

type Request = {
  params: {
    userId: string
  }
  traceId?: string
}

type UserDto = {
  id: string
  email: string
}

export const getUserHandler = (req: Request) => {
  const { userId } = req.params

  if (!userId || userId.trim().length === 0) {
    return v1.http.apiErrorV1(
      v1.errors.ErrorCodeV1.INVALID_ARGUMENT,
      "userId is required",
      { field: "userId" },
      req.traceId
    )
  }

  if (userId !== "u_123") {
    return v1.http.apiErrorV1(
      v1.errors.ErrorCodeV1.NOT_FOUND,
      "User not found",
      { userId },
      req.traceId
    )
  }

  const user: UserDto = {
    id: "u_123",
    email: "user@example.com"
  }

  return v1.http.apiOkV1(user, req.traceId)
}
