import { Router } from "express";
const router=Router()

import * as authCtrl from '../controllers/auth.controllers'

import {verifySignUp} from '../middlewares'


router.post("/signup",[verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted],
    authCtrl.signup)
router.post("/signin", authCtrl.signin)

export default router;