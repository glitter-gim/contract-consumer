import { getUserHandler } from "./handler.js"

console.log(getUserHandler({ params: { userId: "" }, traceId: "t_1" }))
console.log(getUserHandler({ params: { userId: "u_999" }, traceId: "t_2" }))
console.log(getUserHandler({ params: { userId: "u_123" }, traceId: "t_3" }))
