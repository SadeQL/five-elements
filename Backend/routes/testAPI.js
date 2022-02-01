let express = require("express");
let router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.status(201).json({message:'objet créé'})
  res.send("message reçu")
})


module.exports = router;
