let menu = require("../data/menu.js")
let path = require("path");

let indexController = {
    home: (req, res) => {
        
        res.render(path.resolve(__dirname, "../views/index.ejs"), { menu: menu, texto: "hola soy un texto" })
    },
}



module.exports = indexController;