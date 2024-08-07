import { Router } from "express";
const router=Router()

import * as productCtrl from '../controllers/products.controllers'
import {verifyToken} from '../middlewares'


router.post('/',verifyToken,productCtrl.createProduct)

router.get('/',productCtrl.getProducts)
router.get('/:productsId',productCtrl.getProductsId)

router.put('/:productsId',verifyToken,productCtrl.updateProductsById)

router.delete('/:productsId',verifyToken,productCtrl.deleteProductsById)








export default router;