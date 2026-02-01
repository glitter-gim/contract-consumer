import { v1 } from "@platform/shared-public"

type UserDto = {
  id: string
  email: string
}

const getUser = (found: boolean) => {
  if (!found) {
    return v1.http.apiErrorV1(
      v1.errors.ErrorCodeV1.NOT_FOUND,
      "User not found"
    )
  }

  const user: UserDto = {
    id: "u_123",
    email: "user@example.com"
  }

  return v1.http.apiOkV1(user)
}

console.log(getUser(false))
console.log(getUser(true))
