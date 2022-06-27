let express=require("express");
let router=express.Router();
let userController=require("../controller/userController")

router.get("/",userController.user);
router.get("/1",userController.detalle);
module.exports=router;