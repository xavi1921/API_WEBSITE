import { Router } from "express";
const router=Router()

import * as userCtrl from '../controllers/user.controllers'
import { authJwt,verifySignUp } from "../middlewares"; 

router.post('/',[
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignUp.checkRolesExisted
],userCtrl.createUser)

export default router;