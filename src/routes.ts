import { request, response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { GetUserInfoController } from "./controllers/GetUserInfoController";
import { LoginUserController } from "./controllers/LoginUserController";
import { authentication } from "./middleware/auth";

const router = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const getUserInfoController = new GetUserInfoController();
const getAllUsersController = new GetAllUsersController();

router.post("/users", createUserController.handle);

router.post("/login", loginUserController.handle);
router.get("/users/profile", authentication, getUserInfoController.handle);
router.get("/users", getAllUsersController.handle);

export default router;
