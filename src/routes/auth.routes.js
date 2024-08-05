import { Router } from "express";
const router=Router()

import * as authCtrl from '../controllers/auth.controllers'

router.post('/sigup', authCtrl.signup)
router.post('/sigin', authCtrl.signin)

export default router;