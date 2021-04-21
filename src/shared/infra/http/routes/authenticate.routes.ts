import { Router } from "express";

import { AuthenticateUsercontroller } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUsercontroller = new AuthenticateUsercontroller();

authenticateRoutes.post("/sessions", authenticateUsercontroller.handle);

export { authenticateRoutes };
