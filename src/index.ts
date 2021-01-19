// Libraries
import express, { Express } from "express"
import cors from "cors"

// Connection
import { AddressInfo } from "net"

const app: Express = express()
app.use(express.json())
app.use(cors())

// Endpoints Functions
import {createStudents} from "./endpoint/createStudent"
import { addStudentToClass } from "./endpoint/addStudentToClass"

// app.get("/", )
app.post("/student", createStudents)
app.put("/student/:student_id", addStudentToClass)

// Server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost:${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
 })