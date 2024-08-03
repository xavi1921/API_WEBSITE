import Products from '../models/Products'


export const createProduct =async (req,res)=>{
    const{name,category,price,imgUrl}=req.body
    const newProducts=new Products({name,category,price,imgUrl});

    const productSaved= await newProducts.save()

    res.status(201).json(productSaved)
}

export const getProducts =async (req,res)=>{
    const products=await Products.find();
    res.json(products)
}

export const getProductsId =(req,res)=>{

}

export const updateProductsById =(req,res)=>{

}

export const deleteProductsById =(req,res)=>{

}