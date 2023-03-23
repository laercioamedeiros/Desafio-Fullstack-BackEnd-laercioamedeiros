import "reflect-metadata"
import express from 'express'
import userRoutes from './routes/users.routes'
import sessionRoutes from "./routes/session.routes"
import contactRoutes from "./routes/contacts.routes"
import  AppDataSource  from "./data-source"
const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', sessionRoutes)
app.use('/contacts', contactRoutes)


AppDataSource.initialize()
.then(async () => {
    console.log("Database connected.");

    const PORT = process.env.PORT || 3000;

    app.listen(3000 ,() => {
        console.log(`Server is running on https://localhost:${PORT}`)
    })
})
.catch((err: any) => console.error(err));

