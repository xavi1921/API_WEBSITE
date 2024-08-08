import { Router } from "express";
const router=Router()

import * as productCtrl from '../controllers/products.controllers'
import {authJwt} from '../middlewares'


router.post('/',[authJwt.verifyToken,authJwt.isModerator],productCtrl.createProduct)

router.get('/',productCtrl.getProducts)
router.get('/:productsId',productCtrl.getProductsId)

router.put('/:productsId',[authJwt.verifyToken,authJwt.isAdmin],productCtrl.updateProductsById)

router.delete('/:productsId',[authJwt.verifyToken,authJwt.isAdmin],productCtrl.deleteProductsById)








export default router;