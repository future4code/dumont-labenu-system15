// Types from Express.js library
import { Request, Response } from 'express'

// Type from src/type
import { Teacher } from '../../type/teacher'

// Query functions
import { insertTeacher } from '../../data/teacher/insertTeacher'

// Utilities
import { verifyBodyKeys, verifyString } from '../../utility/verifier'
import { checkDate } from '../../utility/checkDate'
import { formatDate } from '../../utility/formatDate'

// Database function
export const createTeacher = async (req: Request, res: Response): Promise<void> => {
    const validKeys = ["teacherName", "teacherEmail", "birthDate"]

    try {
        res.statusCode = 422
        verifyBodyKeys(req.body, validKeys)
        verifyString(req.body)

        checkDate(req.body.birthDate)

        const newTeacher: Teacher = {
            teacher_name: req.body.teacherName,
            teacher_email: req.body.teacherEmail,
            teacher_birth_date: formatDate(req.body.birthDate)
        }

        await insertTeacher(newTeacher)
        res.status(201).send("Teacher created successfully.")
        
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}