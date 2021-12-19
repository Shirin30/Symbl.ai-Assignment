const express = require('express');
const app = express();
const jsonData = {
    data : [{
        id: 1,
        name: "Item 1"
        }, {
        id: 3,
        name: "Item 3"
        }, {
        id: 2,
        name: "Item 2",
        }, {
        id: 4,
        name: "Item 4"
        }]
} 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });   
app.get('/',(req,res)=>{
    res.send('API');
});

app.get('/api/data',(req,res)=>{
    res.send(jsonData);
});
app.get('/api/data/:id',(req,res)=>{
    for(let i = 0; i<jsonData.data.length;i++){
        if(jsonData.data[i].id == req.params.id){
            res.send(jsonData.data[i]);
        }
    }
    
});

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`listening on port ${port}`));