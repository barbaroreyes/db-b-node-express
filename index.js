const express = require('express');
const app = express();
const PORT = 5000
app.use(express.json());


app.get('/',(req,res)=>{
    res.json({message : 'im working very hard'})
})
















app.listen(PORT,()=>console.log(`Runnig on port ${PORT}` ))