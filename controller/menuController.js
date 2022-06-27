let path = require("path");
let menu = require("../data/menu.js")
let menuController = {
    detalleMenu: (req, res) => {
        let id = parseInt(req.params.id);
        let detallePlato = menu.find(element => element.id === id)
        //console.log(detallePlato)
        res.render(path.resolve(__dirname, "../views/detalleMenu.ejs"), { detallePlato })        
    },
    agregarOpcionMenu: (req,res) => {
        res.status(201).send("se ha agregado una opcion al menu");
    },
    borrarOpcionMenu: (req,res) =>{
        let id=parseInt(req.params.id)
        let acumulador = menu;
        console.log(acumulador)
        for(let i=0; i< menu.length; i++){
            if(menu[i].id === id){
                res.send(`se ha borrado la opcion de menu con id ${id}`)
                
            }
        }
        
    }
    
}




/* const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
 */

module.exports = menuController;