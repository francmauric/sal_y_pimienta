let express=require("express");
let router=express.Router();
let {detalleMenu,agregarOpcionMenu,borrarOpcionMenu}=require("../controller/menuController")

router.get("/:id",detalleMenu);

router.post("/",agregarOpcionMenu);

router.delete("/borrar/:id",borrarOpcionMenu);



module.exports=router;


/*let menuController=require("../controller/menuController")

router.get("/:id",menuController.detalleMenu);
 */