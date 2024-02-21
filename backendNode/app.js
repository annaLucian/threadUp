import  express  from "express";
import cors from "cors";
import dbhackaton from "./database/db.cjs";

import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/inicio', blogRoutes)

try {
    await dbhackaton.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log('El error a la conexion es : ${error}')    
}

app.get('/', (req,res)=> {
    res.send('Hola mundo')
})


app.listen(8000, ()=>{
    console.log('server Up running in http://localhost:8000/')
})