import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";

const appRouter = Router()

appRouter.use("/user", userRoutes) //localhost800/api/v1/user
appRouter.use("/chats", chatRoutes) //localhost800/api/v1/chats

export default appRouter