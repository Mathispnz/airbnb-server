const express = require("express");
const House = require("../models/house-model.js");

const router = express.Router();

// GET /phones - retrieve the list of phones
router.get("/houses", (req, res, next)=>{
  House.find()
    .limit(21)
    // send the query results as a JSON response to the client
    .then(houseResults => res.json(houseResults))
    .catch(err => next(err));
  })
  
//   // POST /phones - Create a new phone (add to list)
//   router.post("/phones", (req, res, next)=>{
//     const{brand, model, price, image, specs}  = req.body
//     Phone.create({brand, model, price, image, specs})
//     .then(phoneDoc => res.json(phoneDoc))
//     .catch(err => next(err));
// })

// GET /phones/:id - Retrieve the details of ONE phone
router.get("/houses/:id", (req,res,next)=>{
  const {id} = req.params
  House.findOne({recordid : {$eq : id}})
  .then(houseDoc => res.json(houseDoc))
  .catch(err=>next(err))
})

// // PUT /phones/:id - Update ONE phone
// router.put("/phones/:id", (req,res,next)=>{
//   const {id} = req.params
//   const {brand, model, price, image, specs} = req.body
  
//   Phone.findByIdAndUpdate(
//     id, 
//     {$set : {brand, model, price, image, specs}}, 
//     {runValidators : true, new :true}
//     )
//     .then(phoneDoc => res.json(phoneDoc))
//     .catch(err=>next(err))
// })

// // DELETE /phones/:id - Delete ONE phone
// router.delete("/phones/:id", (req,res,next)=>{
//   const {id} = req.params
//   Phone.findByIdAndRemove(id)
//   .then(phoneDoc => res.json(phoneDoc))
//   .catch(err=>next(err))
// })

module.exports = router;
