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

export const getProductsId = async (req,res)=>{
    const product= await Products.findById(req.params.productsId);
    res.status(200).json(product)
}

export const updateProductsById = async (req,res)=>{
    const updateProduct=await Products.findByIdAndUpdate(req.params.productsId, req.body,{
        new:true
    })
    res.status(200).json(updateProduct)
}

export const deleteProductsById = async (req,res)=>{
    const {productsId}=req.params;
    const deleteProduct=await Products.findByIdAndDelete(productsId)
    res.status(204).json()
}