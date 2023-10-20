const express=require('express')
const { default: mongoose } = require('mongoose')
const { MONGOURI } = require('./keys')
const cors=require('cors')
const app=express()






async function connectToDatabase() {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected');
    } catch (err) {
        console.error(err);
    }
}

connectToDatabase();


app.use(express.json())
app.use(cors())
app.use(require('./routes/auth'))
app.use(require('./routes/rides'))
// app.use(require('./routes/user'))



const PORT=4000
app.listen(PORT,()=>console.log(`server is running at ${PORT}`))