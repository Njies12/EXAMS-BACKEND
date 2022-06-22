const express=require('express')
const cors=require('cors')
const router=require('./controller/serviceController')
const app =express()
const mongoose= require('mongoose')
const PORT=4000
const URL='mongodb://127.0.0.1/services'
mongoose
.connect(URL)
.then(()=>{
    console.log(`connected to MongoDB ${URL}`)
}).catch(error=>{
    console.log('error connnecting DB', error.message);
})
app.use(cors())
app.use(express.json())
app.use('/api/services',router)

app.listen(PORT, ()=>{
    console.log(`server is running at port${PORT}`);
})
