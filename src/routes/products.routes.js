import { Router } from "express";
const router=Router()

import * as productCtrl from '../controllers/products.controllers'


router.post('/',productCtrl.createProduct)

router.get('/',productCtrl.getProducts)
router.get('/:productsId',productCtrl.getProductsId)

router.put('/:productsId',productCtrl.updateProductsById)

router.delete('/:productsId',productCtrl.deleteProductsById)








export default router;