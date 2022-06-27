let userController ={
    user:  function(req, res, next) {
        res.send('soy el usuario');
      },
    detalle: (req,res)=>{
        res.send("soy el mejor")
    }  
      
}

module.exports = userController