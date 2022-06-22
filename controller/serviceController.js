const express= require('express')

const Service=require('../model/serviceModel')
const router= express.Router()

router.get('/', async(req,res)=>{
const Service= await Service.find({})
res.status(200).json(Service.map(ser=>ser.toJSON()))

})

router.post('/', async(req, res)=>{
    const service =await Service.create({
        logo:req.body.logo,
        title:req.body.title,
        description: req.body.description
    })
    const saveServices=await service.save()
    res.status(200).json(saveServices)
})

module.export = router