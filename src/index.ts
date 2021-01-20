// Libraries
import express, { Express } from "express"
import cors from "cors"

// Connection
import { AddressInfo } from "net"

const app: Express = express()
app.use(express.json())
app.use(cors())

// Endpoints Functions
import { createStudents } from "./endpoint/createStudent"
import { createMission } from "./endpoint/createMission"
import { addStudentToClass } from "./endpoint/addStudentToClass"

// Endpoints
app.post("/student", createStudents)
app.put("/student/:n startstudent_id", addStudentToClass)
app.post("/mission", createMission)

// Server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost:${address.port}`)
    } else {
       console.error(`Failure upoing server.`)
    }
 })