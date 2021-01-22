// Libraries
import express, { Express } from "express"
import cors from "cors"

// Connection
import { AddressInfo } from "net"

const app: Express = express()
app.use(express.json())
app.use(cors())

// Endpoints Functions
import { createStudents } from "./endpoint/student/createStudent"
import { createMission } from "./endpoint/mission/createMission"
import { createTeacher } from "./endpoint/teacher/createTeacher"
import { addStudentToClass } from "./endpoint/student/addStudentToClass"
import { getStudentAge } from "./endpoint/student/getStudentAge"
import { addTeacherToClass } from "./endpoint/teacher/addTeacherToClass"
import { getStudentsFromMission } from "./endpoint/mission/getStudentsFromMission"
import { getTeachersFromMission } from "./endpoint/mission/getTeachersFromMission"
import { getStudentsFromHobby } from "./endpoint/student/getStudentsFromHobby"

// Endpoints
app.post("/student", createStudents)
app.put("/student/:id", addStudentToClass)
app.get("/student/:id", getStudentAge)
app.get("/students/hobby/:id", getStudentsFromHobby)

app.post("/mission", createMission)
app.get("/mission/:id/students", getStudentsFromMission)
app.get("/mission/:id/teachers", getTeachersFromMission)

app.post("/teacher", createTeacher)
app.put("/teacher/:id", addTeacherToClass)


// Server
const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo
      console.log(`Server is running in http://localhost:${address.port}`)
   } else {
      console.error(`Failure upon starting server.`)
   }
})
