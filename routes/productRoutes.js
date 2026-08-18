const express=require("express");

const router=express.Router();

const product=require("../controllers/productController");

const auth=require("../middleware/auth");

router.get("/products",auth,product.displayProducts);

router.get("/addproduct",auth,(req,res)=>{

    res.render("addproduct");

});

router.post("/addproduct",auth,product.addProduct);

router.get("/product/:id",auth,product.productDetails);

router.post("/delete/:id",auth,product.deleteProduct);

router.post("/update/:id",auth,product.updateProduct);
router.get("/myproducts", auth, product.myProducts);
module.exports=router;
