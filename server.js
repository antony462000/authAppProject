const express =require("express")
const app = express()
const port  = 3001
try {
    app.listen(port,() =>{
        console.log(`Example listening in http://localhost:${port}/`)
    })
} catch (error) {
    
}

app.get("/",(req,res)=>{
    res.send("Hello haiii")
})